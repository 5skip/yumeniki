import { signIn } from 'next-auth/react';
import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Flex, Text, Box, Button, VStack, Input, Center, Spacer, Container } from '@yamada-ui/react';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false, 
      username,
      password,
      callbackUrl: `${window.location.origin}/home`
    });

    if (result && result.url) window.location.href = result.url; // リダイレクト
  };

  return (
    <div>
      <Center h="xl">
        <Container>
          <VStack>
            <Spacer />

            <Center>
              <Text
              fontSize="xl"
              fontWeight="bold"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              >
                Welcome to 夢ニキ
              </Text>
            </Center>

            <Center>
              <Button colorScheme="fuchsia"  variant="outline" onClick={() => signIn()}>Sign In</Button>
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
}

export default LoginPage;
