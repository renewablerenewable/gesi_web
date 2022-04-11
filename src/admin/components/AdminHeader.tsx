import React from 'react';
import { Avatar } from '../../components/Avatar';
import { Dropdown } from '../../components/Dropdown';
import { Menu } from '../../components/Menu';
import { useAuth } from '../../hooks';

export const AdminHeader = () => {
  const { logout } = useAuth();

  return (
    <div className="flex justify-between px-4 h-16 bg-white shadow">
      <div className="flex-1" />

      <div className="ml-4 flex items-center">
        <Dropdown>
          <button>
            <Avatar className="wh-10" />
          </button>
          <Dropdown.View className="right-0 rounded-md">
            <Menu>
              <Menu.Item text="Logout" onClick={logout} />
            </Menu>
          </Dropdown.View>
        </Dropdown>
      </div>
    </div>
  );
};
