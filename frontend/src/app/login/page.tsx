<img src="yumeniki_logo.webp" alt="" width="400"/>
"use client"

import { signIn } from 'next-auth/react';
import { useState, FormEvent } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Flex, Text, Box, Button, VStack, Input, Center, Spacer, Container } from '@yamada-ui/react';
import { getAuthSession } from '../../../lib/nextauth';
import { z } from "zod"
import { useForm, SubmitHandler } from "react-hook-form"
// import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@yamada-ui/react"
// import { zodResolver } from "@hookform/resolvers/zod"

const LoginPage = async () => {
  const user = await getAuthSession();

  if (user) {
    redirect("/")
  }

  return (
    <div>
    	<div className="max-w-[400px] m-auto">
      <div className="text-2xl font-bold text-center mb-10">ログイン</div>

      	{/* <Form >
          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>パスワード</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoading} type="submit" className="w-full">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            ログイン
          </Button>
        </form>
      </Form>

      <div className="text-center mt-5">
        <Link href="/reset-password" className="text-sm text-blue-500">
          パスワードを忘れた方はこちら
        </Link>
      </div>

      <div className="text-center mt-2">
        <Link href="/signup" className="text-sm text-blue-500">
          アカウントを作成する
        </Link> */}
      </div>
    </div>
  );
};

export default LoginPage;
