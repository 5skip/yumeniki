"use client";

import { Calendar } from "@yamada-ui/calendar"
import { useState } from "react"
import { useRouter } from "next/navigation";
import Link from 'next/link'
import React from "react";
import { Text, Box, Button, VStack, Input, Center, Spacer, Container, HStack } from '@yamada-ui/react';

export const HomePage = () => {

  const [date, setChange] = useState<Date>(new Date());
  const router = useRouter();

  const onChange = (date: Date) => {
    setChange(date);  // タップした日付をdateにセット
    console.log(date);
  };

  return (
    <>
      <Container centerContent className="w-full max-w-2xl bg-white md:rounded-lg md:shadow-md p-4 md:p-10 my-10">
        <VStack >
          <Center>
          <div className="w-full max-w-2xl bg-white md:rounded-lg md:shadow-md p-4 md:p-10 my-10">
            <Calendar
              value={date}
              onChange={onChange}
              size="full"
              variant="solid"
              colorScheme="secondary"
              today
              dateFormat="YYYY年 MMMM"
              defaultValue={new Date(new Date().setDate(1))}
            />
          </div>
          </Center>
          <Center>
            <Link
              href={{
                pathname: '/nikki',
                query: {date: date.toISOString().slice(0,10)}
              }}
            >
              <Button colorScheme="fuchsia" variant="outline">作成</Button>
            </Link>
          </Center>
        </VStack>
      </Container>
    </>
  )
}

export default HomePage;