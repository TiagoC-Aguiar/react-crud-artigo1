import { ChangeEvent, FC, useState } from 'react';
import { Button } from '@mui/material';
import { UserType } from '~/user/UserPage';
import { initialFormState } from '~/data';

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
      <label>
        Name
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Username
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <Button variant="contained" color="primary" type="submit">
        New User
      </Button>
    </form>
  );
};

export default AddUser;
