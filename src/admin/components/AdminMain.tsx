import React, { FC } from 'react';

export const AdminMain: FC = ({ children }) => {
  return (
    <main className="flex-1 relative py-6 overflow-y-auto">
      <div className="flex flex-col space-y-4 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {children}
      </div>
    </main>
  );
};
