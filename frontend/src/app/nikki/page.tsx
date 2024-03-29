"use client";

import { ChakraProvider } from '@chakra-ui/react'
import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Chat from "../components/Chat";
import InputForm from "../components/InputForm";
import { Message } from "../types/custom";
import ThreeDotsLoader from "../components/ThreeDotsLoader";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';

const Home: NextPage = () => {
  const [chats, setChats] = useState<Message[]>([
    {
      role: "system",
      content: "あなたは夢占い師ロボットです。必ずロボットように話してください。語尾は「デス」「マス」のようにカタカタにしてください。人生のアドバイスではなく夢を占ってください。夢占いの結果のみ出力してください。",
    },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleSubmit = async (message: Message) => {
    try {
      setIsSubmitting(true);
      setChats((prev) => [...prev, message]);

      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: [...chats, message].map((d) => ({
            role: d.role,
            content: d.content,
          })),
        }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      console.log(data.result)
      setChats((prev) => [...prev, data.result as Message]);
      console.log(chats.length)
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };


  const savePost = async () => {
    let userDream: String = "" //ユーザーが見た夢
    let dreamResult: String = "" //AIからの夢占い結果
    if (chats.slice(-1)[0].role == "assistant" && chats.length != 1) {
      userDream = chats.slice(-2, -1)[0].content
      dreamResult = chats.slice(-1)[0].content
    }
    
    console.log(userDream)
    console.log(dreamResult)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/post-create/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `JWT ${accessToken}`,
        },
        body: JSON.stringify({ 
          content: userDream, 
          diagnosis: dreamResult, 
        }),
      });
    
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      router.push("/calendar");
      console.log("Post created successfully:", data);
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  }

  return (
    <ChakraProvider>
    <div className="w-full max-w-2xl bg-white md:rounded-lg md:shadow-md p-4 md:p-10 my-10">
      <h1>{searchParams?.get('date')}</h1>
      <InputForm onSubmit={handleSubmit} />
      <div className="mb-10 h-72">
        {isSubmitting && (
          <Flex alignSelf="flex-start" px="2rem" py="0.5rem">
            <ThreeDotsLoader />
          </Flex>
        )}
        <Flex alignSelf="flex-start" px="0rem" py="0.5rem">
          <AnimatePresence>
            {(chats.slice(-1)[0].role == "assistant" && chats.length != 1) ? 
              <Chat role={chats.slice(-1)[0].role} content={chats.slice(-1)[0].content} key={1} /> :
              <div></div>
            }
          </AnimatePresence>
        </Flex>
      </div>

      <div className="w-21 border rounded-lg border-fuchsia-600 flex items-center justify-center hover:bg-fuchsia-50">
        <button
          type="submit"
          className="w-21 py-2 font-black text-center text-fuchsia-600"
          onClick={savePost}
        >
          保存する
        </button>
      </div>
    </div>
    </ChakraProvider>
  );
};

export default Home;
