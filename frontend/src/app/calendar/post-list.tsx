"use client";

import React, { useEffect, useState } from 'react';
import { PostType } from '../../types/posttype'; 
import { Container, Center } from '@yamada-ui/react';
import { UserType } from '../../types/usertype';

interface Post {
  post_id: number;
  content: string;
  diagnosis?: string;
  post_date: string;
	user: UserType;
}

export const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

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
		<Container centerContent className="w-full max-w-2xl bg-white md:rounded-lg md:shadow-md p-4 md:p-10 my-10">
      <h1>日記一覧</h1>
			<Center>
      <ul>
        {posts.map((post) => (
					<li key={post.post_id} className="w-full max-w-2xl bg-white md:rounded-lg md:shadow-md p-4 md:p-10 my-10">
            <p>{post.post_date}: {post.content}</p>
          </li>
        ))}
      </ul>
			</Center>
			</Container>
    </div>
  );
};
