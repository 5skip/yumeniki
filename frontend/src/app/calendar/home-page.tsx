"use client";

import { Calendar } from "@yamada-ui/calendar"
import { useState } from "react"
import { useRouter } from "next/navigation";
import Link from 'next/link'
import React from "react";
import { Text, Box, Button, VStack, Input, Center, Spacer, Container } from '@yamada-ui/react';

export const HomePage = () => {

  const [date, setChange] = useState<Date>(new Date());
  const router = useRouter();

  const onChange = (date: Date) => {
    setChange(date);  // タップした日付をdateにセット
    console.log(date);
  };

  return (
    // <div>
		// 	<Center h="xl">
		// 		<Container>
		// 			<VStack>
		// 				<Center>
		// 					<Text>Sign Up</Text>
		// 				</Center>		
		// 				<Spacer />
		// 				<Center>
		// 					<form >
		// 						<div>
		// 						<Text>Username:</Text>								
		// 							<Input
		// 								type="text"
		// 								value={"username"}
		// 								// onChange={(e) => setUsername(e.target.value)}
		// 							/>
		// 						</div>
		// 						<Spacer />
		// 						<div>
		// 							<Text>Password:</Text>
		// 							<Input
		// 									type="password"
		// 									value={"password"}
		// 									// onChange={(e) => setPassword(e.target.value)}
		// 							/>
		// 						</div>
		// 						<Spacer />
    //             <div>
    //               <Text>Confirm Password:</Text>
    //               <Input
    //                 type="password"
    //                 value={"passwordConfirmation"}
    //                 // onChange={(e) => setPasswordConfirmation(e.target.value)}
    //               />
    //             </div>
		// 						<Spacer />
		// 						<Button size="xs" type="submit">Sign Up</Button>
		// 					</form>
		// 				</Center>				
		// 			</VStack>
		// 		</Container>
		// 	</Center>
    // </div>
      <div className="w-full max-w-2xl bg-white md:rounded-lg md:shadow-md p-4 md:p-10 my-10">
        <Center>
          <Calendar
              value={date}
              onChange={onChange}
              size="full"
              variant="subtle"
              today
              dateFormat="YYYY年 MMMM"
              defaultValue={new Date(new Date().setDate(1))}
            />
        </Center>
        <h1>{date.toISOString().slice(0,10)}</h1>
        <Link
          href={{
            pathname: '/nikki',
            query: {date: date.toISOString().slice(0,10)}
          }}
        >
          <Button>作成</Button>
        </Link>
      </div>
  )
}

export default HomePage;