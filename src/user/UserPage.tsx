import { useState } from 'react';

import { AddUser, EditUserForm, Header, UserTable } from '~/components';
import { initialFormState, usersData } from '~/data';
import { BoxWithTitle } from './components';
import './style.scss';

export type UserType = {
  id: number;
  name: string;
  username: string;
};

const Home = () => {
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user: UserType) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user: UserType) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id: number, updateUser: UserType) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <Header />
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <BoxWithTitle headingText="Edit user">
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </BoxWithTitle>
          ) : (
            <BoxWithTitle headingText="Add user">
              <AddUser addUser={addUser} />
            </BoxWithTitle>
          )}
        </div>
        <BoxWithTitle headingText="View users">
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </BoxWithTitle>
      </div>
    </div>
  );
};

export default Home;
