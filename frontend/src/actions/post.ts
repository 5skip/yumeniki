// "use server"

import { UserType } from "../types/usertype"

const fetchAPI = async (url: string, options: RequestInit) => {
  const apiUrl = process.env.NEXTAUTH_BACKEND_URL

  if (!apiUrl) {
    return { success: false, error: "API URLが設定されていません" }
  }

  try {
    const response = await fetch(`${apiUrl}${url}`, options)

    if (!response.ok) {
      return { success: false, error: "APIでエラーが発生しました" }
    }

    const contentType = response.headers.get("Content-Type")
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json()
      return { success: true, data }
    }

    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false, error: "ネットワークエラーが発生しました" }
  }
}

export interface PostType {
  post_id: string
  content: string
  diagnosis: string
  post_date: string
  user: UserType
}

// 投稿一覧取得
export const getPostList = async () => {
  const options: RequestInit = {
    method: "GET",
    cache: "no-store",
  }

  // 投稿一覧取得
  const result = await fetchAPI("/api/posts/", options)

  if (!result.success) {
    console.error(result.error)
    return { success: false, posts: [] }
  }

  const posts: PostType[] = result.data

  return { success: true, posts }
}

// 投稿詳細取得
export const getPostDetail = async ({ postId }: { postId: string }) => {
  const options: RequestInit = {
    method: "GET",
    cache: "no-store",
  }

  // 投稿詳細取得
  const result = await fetchAPI(`/api/post-detail/${postId}/`, options)

  if (!result.success) {
    console.error(result.error)
    return { success: false, post: null }
  }

  const post: PostType = result.data

  return { success: true, post }
}

interface CreatePostType {
  accessToken: string
  content: string
  diagnosis: string
  post_date: string
}

// 新規投稿
export const createPost = async ({
  accessToken,
  content,
  diagnosis,
  post_date,
}: CreatePostType) => {
  const body = JSON.stringify({
    content: content,
    diagnois: diagnosis,
    post_date: post_date,
  })

  const options = {
    method: "POST",
    headers: {
      Authorization: `JWT ${accessToken}`,
      "Content-Type": "application/json",
    },
    body,
  }

  // 新規投稿を送信
  const result = await fetchAPI("/api/post-create/", options)

  if (!result.success) {
    console.error(result.error)
    return { success: false, post: null }
  }

  const post: PostType = await result.data

  return { success: true, post }
}

interface UpdatePostType {
  accessToken: string
  post_id: string
  content: string
  post_date: string
}

// 投稿編集
export const updatePost = async ({
  accessToken,
  post_id,
  content,
  post_date,

}: UpdatePostType) => {
  const body = JSON.stringify({
    content: content,
    post_date: post_date,
  })

  const options = {
    method: "PATCH",
    headers: {
      Authorization: `JWT ${accessToken}`,
      "Content-Type": "application/json",
    },
    body,
  }

  // 投稿編集を送信
  const result = await fetchAPI(`/api/posts/${post_id}/`, options)

  if (!result.success) {
    console.error(result.error)
    return { success: false }
  }

  return { success: true }
}

interface DeletePostType {
  accessToken: string
  post_id: string
}

// 投稿削除
export const deletePost = async ({ accessToken, post_id }: DeletePostType) => {
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `JWT ${accessToken}`,
    },
  }

  // 投稿削除を送信
  const result = await fetchAPI(`/api/posts/${post_id}/`, options)

  if (!result.success) {
    console.error(result.error)
    return { success: false }
  }

  return { success: true }
}