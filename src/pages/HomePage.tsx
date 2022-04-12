import React, { useState } from 'react';
import { Button } from '../components/Button';
import { MainSwiperModal } from '../components/modal/MainSwiperModal';
import { useAuth } from '../hooks';

export const HomePage = () => {
  const { authenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <MainSwiperModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="Guide"
      />
      <div className="p-4 flex flex-col space-y-2">
        <h1>HomePage</h1>

        {authenticated ? (
          <>
            <Button text="MyPage" className="filled-brand-1" to="/mypage" />
            <Button
              text="Logout"
              className="outlined-red-500"
              onClick={logout}
            />
          </>
        ) : (
          <>
            <Button text="Login" className="filled-gray-800" to="/login" />
            <Button text="Signup" className="outlined-gray-800" to="/signup" />
          </>
        )}
      </div>
    </>
  );
};
