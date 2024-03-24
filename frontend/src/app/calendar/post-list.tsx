"use client";

import React, { useEffect, useState } from 'react';
import { PostType } from '../../types/posttype'; 
import { Container, Center } from '@yamada-ui/react';
import { UserType } from '../../types/usertype';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

interface Post {
  post_id: number;
  content: string;
  diagnosis?: string;
  post_date: string;
	user: UserType;
}

export const PostList: React.FC<{ day: String }> = ({ day })=> {
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts/`);
        if (!response.ok) {
          throw new Error('日記一覧の取得に失敗しました');
        }
        const data = await response.json();
        setPosts(data); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []); 

  return (
    <div>
		<Container centerContent >
      <h1>日記一覧</h1>
      <h1>{day}</h1>
			<Center>
      <ul>
        {posts.map((post) => (
					<li key={post.post_id} className="w-40 max-w-2xl bg-white rounded-lg shadow-md p-4 md:p-10 my-10 sm:w-80 lg:w-48">
            <Link  href={{ ///日記一覧から日記詳細画面へ
                pathname: '/post',
                query: {date: post.post_date, content: post.content, diagnosis: post.diagnosis}
              }}>
                <p>{post.post_date}</p>
                <p>{post.content}</p>
            </Link>
          </li>
        ))}
      </ul>
			</Center>
			</Container>
    </div>
  );
};
