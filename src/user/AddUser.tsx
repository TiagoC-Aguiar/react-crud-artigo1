import { ChangeEvent, FC, useState } from 'react';
import { Button } from '@mui/material';
import { UserType } from '~/user/UserPage';
import { initialFormState } from '~/data';
import { Input } from './components';

type AddUserFormProps = {
  addUser: (user: UserType) => void;
};

const AddUser: FC<AddUserFormProps> = (props) => {
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <Input
        label="Name"
        value={user.name}
        name="name"
        onChange={handleInputChange}
      />
      <br />
      <Input
        label="Username"
        value={user.username}
        name="username"
        onChange={handleInputChange}
      />
      <br />
      <Button variant="contained" color="primary" type="submit">
        New User
      </Button>
    </form>
  );
};

export default AddUser;
