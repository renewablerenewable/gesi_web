import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { TextField } from '../../components/TextField';
import { fetcher } from '../../plugins/react-query';
import { User } from '../../types';
import { AdminH1 } from '../components/AdminH1';

export const UserShow = () => {
  const { id } = useParams<{ id: string }>();
  const { data: user } = useQuery<User>(`/admin/users/${id}`, fetcher);

  if (!user) return <></>;
  return (
    <>
      <AdminH1>User</AdminH1>

      <Card>
        <div className="grid grid-cols-1 gap-6 px-4 py-6 sm:px-6 md:grid-cols-2 md:px-8">
          <TextField label="email" type="email" value={user.email} disabled />
          <TextField label="name" value={user.name} disabled />
        </div>

        <div className="flex justify-end space-x-4 px-4 py-4 sm:px-6 md:px-8">
          <Button
            text="Edit"
            to={`/admin/users/${id}/edit`}
            className="h-10 text-sm filled-indigo-500 hover:bg-indigo-600"
          />
        </div>
      </Card>
    </>
  );
};
