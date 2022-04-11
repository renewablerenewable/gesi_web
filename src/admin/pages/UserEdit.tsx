import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { TextField } from '../../components/TextField';
import { api } from '../../plugins/axios';
import { fetcher } from '../../plugins/react-query';
import { User } from '../../types';
import { AdminH1 } from '../components/AdminH1';

interface FormValues {
  email: string;
  name: string;
}

export const UserEdit = () => {
  const { push } = useHistory();
  const { id } = useParams<{ id: string }>();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const { data: user } = useQuery<User>(`/admin/users/${id}`, fetcher);
  useEffect(() => reset(user), [reset, user]);

  if (!user) return <></>;
  return (
    <>
      <AdminH1>User</AdminH1>

      <Card>
        <div className="grid grid-cols-1 gap-6 px-4 py-6 sm:px-6 md:grid-cols-2 md:px-8">
          <TextField
            label="email"
            type="email"
            helper={errors.email?.message}
            {...register('email', { required: '이메일을 입력해주세요' })}
          />
          <TextField
            label="name"
            helper={errors.name?.message}
            {...register('name', { required: '이름을 입력해주세요' })}
          />
        </div>

        <div className="flex justify-end space-x-4 px-4 py-4 sm:px-6 md:px-8">
          <Button
            text="Cancel"
            to={`/admin/users/${id}`}
            className="h-10 text-sm outlined-gray-600 hover:bg-gray-50"
          />
          <Button
            text="Save"
            className="h-10 text-sm filled-indigo-500 hover:bg-indigo-600"
            onClick={handleSubmit(async (data) => {
              await api.patch(`/admin/users/${id}`, data);
              push(`/admin/users/${id}`);
            })}
          />
        </div>
      </Card>
    </>
  );
};
