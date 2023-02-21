import { useSession } from 'next-auth/react';
import React from 'react';
import { client } from '../studio/client';
import { getSignedInUserQuery } from '../studio/queries';
import { UserProps } from '../studio/types';

const useSignedInUser = () => {
  const { data: session } = useSession();
  const [user, setUser] = React.useState<UserProps>(null);

  React.useEffect(() => {
    void (async () => {
      if (session) {
        const userProfile: UserProps = await client.fetch(
          getSignedInUserQuery,
          {
            email: session?.user?.email,
          }
        );
        setUser(userProfile);
      }
    })();
  }, [session]);

  return [user];
};

export default useSignedInUser;
