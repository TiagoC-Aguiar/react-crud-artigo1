import { useState, useEffect, FC, ChangeEvent } from 'react';
import { UserType } from 'app/pages/Home';

type EditUserFormProps = {
  currentUser: UserType;
  updateUser: (id: number, updatedUser: UserType) => void;
  setEditing: (bool: boolean) => void;
};

const EditUserForm: FC<EditUserFormProps> = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
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
      <label>
        Username
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
      </label>
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
