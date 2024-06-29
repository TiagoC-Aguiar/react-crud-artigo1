import { render, fireEvent } from '@testing-library/react';
import { AddUser } from '~/components';

describe('AddUserForm', () => {
  const mockAddUser = jest.fn();

  beforeEach(() => {
    mockAddUser.mockClear();
  });

  test('renders input fields and submit button correctly', () => {
    const { getByLabelText, getByText } = render(
      <AddUser addUser={mockAddUser} />
    );

    const nameInput = getByLabelText('Name');
    expect(nameInput).toBeInTheDocument();
    expect(getByLabelText(/Username/i)).toBeInTheDocument();
    expect(getByText(/New User/i)).toBeInTheDocument();
  });

  test('calls addUser function when form is submitted with valid inputs', () => {
    const { getByLabelText, getByText } = render(
      <AddUser addUser={mockAddUser} />
    );

    const nameInput = getByLabelText('Name');
    fireEvent.change(nameInput, {
      target: { value: 'John Doe' },
    });
    fireEvent.change(getByLabelText(/Username/i), {
      target: { value: 'johndoe' },
    });
    fireEvent.click(getByText(/New User/i));

    expect(mockAddUser).toHaveBeenCalledTimes(1);
    expect(mockAddUser).toHaveBeenCalledWith({
      id: 0,
      name: 'John Doe',
      username: 'johndoe',
    });
  });

  test('does not call addUser function when form is submitted with empty inputs', () => {
    const { getByLabelText, getByText } = render(
      <AddUser addUser={mockAddUser} />
    );

    const nameInput = getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.change(getByLabelText(/Username/i), { target: { value: '' } });
    fireEvent.click(getByText(/New User/i));

    expect(mockAddUser).not.toHaveBeenCalled();
  });

  test('clears input fields after form submission', () => {
    const { getByLabelText, getByText } = render(
      <AddUser addUser={mockAddUser} />
    );

    const nameInput = getByLabelText('Name') as HTMLInputElement;
    const userNameInput = getByLabelText(/Username/i) as HTMLInputElement;
    fireEvent.change(nameInput, {
      target: { value: 'John Doe' },
    });
    fireEvent.change(userNameInput, {
      target: { value: 'johndoe' },
    });
    fireEvent.submit(getByText(/New User/i));

    expect(nameInput.value).toBe('');
    expect(userNameInput.value).toBe('');
  });

  test('handles form submission with Enter key', () => {
    const { getByLabelText } = render(<AddUser addUser={mockAddUser} />);

    const nameInput = getByLabelText('Name');
    fireEvent.change(nameInput, {
      target: { value: 'John Doe' },
    });
    fireEvent.change(getByLabelText(/Username/i), {
      target: { value: 'johndoe' },
    });
    fireEvent.submit(nameInput);

    expect(mockAddUser).toHaveBeenCalledTimes(1);
    expect(mockAddUser).toHaveBeenCalledWith({
      id: 0,
      name: 'John Doe',
      username: 'johndoe',
    });
  });
});
