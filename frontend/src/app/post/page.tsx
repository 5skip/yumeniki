"use client";

import { ChakraProvider } from '@chakra-ui/react'
import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { AnimatePresence } from "framer-motion";
import Chat from "../components/Chat";
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';

const Home: NextPage = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const backHandleClick = () => {
    router.push("/calendar");
  };

  return (
    <ChakraProvider>
    <div className="w-full max-w-2xl bg-white md:rounded-lg md:shadow-md p-4 md:p-10 my-10">
      <h1>{searchParams.get('date')}</h1>

      <div className="flex flex-col py-4 mb-4 border-b border-gray-200">
        <div className="w-full my-4  border rounded-lg border-fuchsia-600">
          <div className="w-full h-40 flex-grow px-4 py-2 ">{searchParams?.get('content')}</div>
        </div>
      </div>

      <div className="mb-10 h-72">
        <Flex alignSelf="flex-start" px="0rem" py="0.5rem">
          <AnimatePresence>
            <Chat role="assistant" content={searchParams?.get('diagnosis')} key={1} />
          </AnimatePresence>
        </Flex>
      </div>

      <div className="w-21 border rounded-lg border-fuchsia-600 flex items-center justify-center hover:bg-fuchsia-50">
        <button
          type="submit"
          className="w-21 py-2 font-black text-center text-fuchsia-600"
          onClick={backHandleClick}
        >
          戻る
        </button>
      </div>
    </div>
    </ChakraProvider>
  );
};

export default Home;
