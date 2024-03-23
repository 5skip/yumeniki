import { UserType } from './usertype'

export interface PostType {
    post_id: string
    content: string
    diagnosis: string
    post_date: string
    user: UserType
  }