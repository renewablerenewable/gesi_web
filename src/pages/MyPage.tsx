import React from 'react';
import { useQuery } from 'react-query';
import { fetcher } from '../plugins/react-query';
import { User } from '../types';

export const MyPage = () => {
  const { data: me } = useQuery<User>('/users/me', fetcher);

  if (!me) return <></>;
  return (
    <>
      <h1>MyPage</h1>

      <pre>{JSON.stringify(me, undefined, 2)}</pre>
    </>
  );
};
