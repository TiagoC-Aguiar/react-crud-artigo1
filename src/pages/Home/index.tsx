import { useState } from "react";

import { AddUserForm, EditUserForm, Header, UserTable } from "components";
import "./style.css";

export type UserType = {
  id: number;
  name: string;
  username: string;
};

const usersData = [
  { id: 1, name: "Tania", username: "floppydiskette" },
  { id: 2, name: "Craig", username: "siliconeidolon" },
  { id: 3, name: "Ben", username: "benisphere" },
];
const initialFormState = { id: 0, name: "", username: "" };

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
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default Home;
