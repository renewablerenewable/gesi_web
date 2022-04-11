import React from 'react';
import { Button } from '../components/Button';
import { Progress } from '../components/Progress';
import { useAuth } from '../hooks';

export const HomePage = () => {
  const { authenticated, logout } = useAuth();

  return (
    <div className="p-4 flex flex-col space-y-2">

      <Progress max={100} value={50} />
      <h1>HomePage</h1>

      {authenticated ? (
        <>
          <Button text="MyPage" className="filled-brand-1" to="/mypage" />
          <Button text="Logout" className="outlined-red-500" onClick={logout} />
        </>
      ) : (
        <>
          <Button text="Login" className="filled-gray-800" to="/login" />
          <Button text="Signup" className="outlined-gray-800" to="/signup" />
        </>
      )}
    </div>
  );
};
