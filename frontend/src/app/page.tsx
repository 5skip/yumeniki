"use client"

import { signIn } from 'next-auth/react';
import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Flex, Text, Box, Button, VStack, Input, Center, Spacer, Container } from '@yamada-ui/react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter()

  const handleSubmit = async () => {
    const result = await signIn('credentials', {
      redirect: false, 
      username,
      password,
      callbackUrl: `${window.location.origin}/calendar`
    });

    if (result && result.url) window.location.href = result.url;
  };

  const nextHandleClick = () => {
    router.push("/calendar");
  };

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
            <Input
              placeholder="Username"
              color="white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
              </Center>

            <Input
              type="password"
              color="white"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />

            <Center>
              <Button colorScheme="fuchsia" variant="outline" onClick={nextHandleClick}>Sign In</Button>
            </Center>
            
            <Center>
              <Text 
                fontSize="xs"
                fontWeight="bold"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                >
                Don't have an account? Sign up <Link href="/signup">here</Link>
              </Text>
            </Center>
          
          </VStack>
        </Container>
      </Center>
    </div>
  );
};

export default LoginPage;