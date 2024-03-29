"use client"

import { signIn } from 'next-auth/react';
import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Flex, Text, Box, Button, VStack, Input, Center, Spacer, Container } from '@yamada-ui/react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {

  return (
    <div>
      <Center h="xl">
        <Container>
          <VStack>
            <Center>
            <Text
              fontSize="xl"
              fontWeight="bold"
              bgGradient="linear(to-l, #FFFFFf, #FFFFFF)"
              bgClip="text"
              >
              夢診断ロボット 『 夢ニキ 』
            </Text>
            </Center>
            <Center>
              <img src="yumeniki_logo.png" alt="" width="400"/>
            </Center>

            <Center>
              
            </Center>
          
          </VStack>
        </Container>
      </Center>
    </div>
  );
};

export default LoginPage;