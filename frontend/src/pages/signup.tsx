import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Text, Box, Button, VStack, Input, Center, Spacer, Container } from '@yamada-ui/react';

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

		if (password !== passwordConfirmation) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(`${process.env.NEXTAUTH_BACKEND_URL}/auth/users/`, {
        username,
        password,
				re_password: passwordConfirmation,
      });

      if (response.status === 201) {
        router.push('/');
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div>
			<Center h="xl">
				<Container>
					<VStack>
						<Center>
							<Text>Sign Up</Text>
						</Center>		
						<Spacer />
						<Center>
							<form onSubmit={handleSubmit}>
								<div>
								<Text>Username:</Text>								
									<Input
										type="text"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
									/>
								</div>
								<Spacer />
								<div>
									<Text>Password:</Text>
									<Input
											type="password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
								<Spacer />
                <div>
                  <Text>Confirm Password:</Text>
                  <Input
                    type="password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                  />
                </div>
								<Spacer />
								<Button size="xs" type="submit">Sign Up</Button>
							</form>
						</Center>				
					</VStack>
				</Container>
			</Center>
    </div>
  );
}