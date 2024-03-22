import { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';

export function useAuth(redirectUrl: string = '/login') {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn('credentials', { callbackUrl: redirectUrl });
    }
  }, [status, redirectUrl]);

  return { session, status };
}
