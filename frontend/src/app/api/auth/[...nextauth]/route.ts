import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        try {
          const res = await axios.post(`${process.env.NEXTAUTH_BACKEND_URL}/api/auth/jwt/create`, {
          username: credentials.username,
            password: credentials.password
          });

          const user = res.data ? { 
            id: res.data.user_id, 
            name: res.data.username, 
            token: res.data.access 
          } : null;

          return user;
        } catch (error) {
          console.error(error);
          return null;
        }
      }
    })
  ],
});