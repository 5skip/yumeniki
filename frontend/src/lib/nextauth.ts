import NextAuth, { getServerSession, type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import type { JWT } from "next-auth/jwt";
import axios from "axios"

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
    refreshToken?: string
  }
}

export interface UserType {
  accessToken: string
  uid: string
  username: string
}

const fetchAPI = async (url: string, options: RequestInit) => {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL

  if (!apiUrl) {
    throw new Error("API URLが設定されていません")
  }

  const response = await fetch(`${apiUrl}${url}`, options)

  if (!response.ok) {
    throw new Error("APIでエラーが発生しました")
  }

  return response.json()
}

const verifyAccessToken = async (token: JWT) => {
  return fetchAPI("/api/auth/jwt/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: token.accessToken }),
  }).then((res) => res.ok)
}

const refreshAccessToken = async (token: JWT) => {
  const { access } = await fetchAPI("/api/auth/jwt/refresh/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh: token.refreshToken }),
  })

  return {
    accessToken: access,
    refreshToken: token.refreshToken,
  }
}

const authorizeUser = async (username: string, password: string) => {
  const session = await fetchAPI("/api/auth/jwt/create/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })

  const user = await fetchAPI("/api/auth/users/me/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${session.access}`,
    },
  })

  return {
    ...session,
    user,
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("ユーザー名とパスワードを入力してください")
        }

        return authorizeUser(credentials.username, credentials.password)
      },
    }),
  ],
  // セッションの設定
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        return {
          ...token,
          accessToken: user.access,
          refreshToken: user.refresh,
        }
      }

      // アクセストークンの検証
      if (await verifyAccessToken(token)) {
        return token
      }

      // アクセストークンの更新
      return refreshAccessToken(token)
    },
    async session({ session, token }: { session: any; token: JWT }) {
      session.accessToken = token.accessToken

      return session
    },
  },
}


// 認証情報取得
export const getAuthSession = async () => {
  const session = await getServerSession(authOptions)

  if (!session || !session.accessToken) {
    return null
  }

  // ユーザー情報を取得
  const user = await fetchAPI("/api/auth/users/me/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${session.accessToken}`,
    },
  })

  const userData: UserType = {
    ...user,
    accessToken: session.accessToken,
  }

  return userData
}