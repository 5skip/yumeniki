import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { Flex, Text, Box, Button, VStack, Input, Center, Spacer, Container } from '@yamada-ui/react';

export default function HomePage() {
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
              >Welcome to 夢ニキ
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
                Don't have an account? Sign Up <Link href="/signup">here</Link>
              </Text>
            </Center>
          </VStack>
        </Container>
      </Center>
    </div>
  );
}
