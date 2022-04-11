import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Pagination } from '../../components/Pagination';
import { Table } from '../../components/Table';
import { fetcher } from '../../plugins/react-query';
import { Paginated, User } from '../../types';
import { AdminH1 } from '../components/AdminH1';
import { useQueryString } from '../../hooks';
import { Select } from '../../components/Select';

export const UserList = () => {
  const [role, setRole] = useState('ALL');
  const queryString = useQueryString({
    filter: { role: role === 'ALL' ? undefined : role },
  });
  const { data } = useQuery<Paginated<User>>(
    `/admin/users${queryString}`,
    fetcher,
    { keepPreviousData: true }
  );

  if (!data) return <></>;
  return (
    <>
      <AdminH1>Users</AdminH1>

      <div className="flex space-x-4">
        <div className="w-40">
          <Select label="Role" onChange={(e) => setRole(e.target.value)}>
            <option value="ALL">ALL</option>
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </Select>
        </div>
      </div>

      <Card>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Th>name</Table.Th>
              <Table.Th>email</Table.Th>
              <Table.Th></Table.Th>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {data.items.map((user) => (
              <Table.Row key={user.id}>
                <Table.Td>{user.name}</Table.Td>
                <Table.Td>{user.email}</Table.Td>
                <Table.Td className="text-right">
                  <Link
                    className="font-normal text-indigo-600 hover:text-indigo-900"
                    to={`/admin/users/${user.id}`}
                  >
                    Details
                  </Link>
                </Table.Td>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        <Pagination>
          <Pagination.Label count={data.items.length} total={data.total} />
          <Pagination.Nav basePath="/admin/users" total={data.total} />
        </Pagination>
      </Card>
    </>
  );
};
