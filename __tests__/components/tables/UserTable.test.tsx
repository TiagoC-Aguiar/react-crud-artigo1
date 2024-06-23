import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UserTable from "~/components/tables/UserTable";

describe("UserTable component", () => {
  const usersData = [
    { id: 1, name: "John", username: "john123" },
    { id: 2, name: "Jane", username: "jane456" },
  ];

  const editRowMock = jest.fn();
  const deleteUserMock = jest.fn();

  test("renders Edit and Delete buttons for each user", () => {
    const { getAllByText } = render(
      <UserTable
        users={usersData}
        editRow={editRowMock}
        deleteUser={deleteUserMock}
      />
    );

    const editButtons = getAllByText("Edit");
    const deleteButtons = getAllByText("Delete");

    expect(editButtons.length).toBe(usersData.length);
    expect(deleteButtons.length).toBe(usersData.length);
  });

  test("calls editRow function with correct user data when Edit button is clicked", () => {
    const { getAllByText } = render(
      <UserTable
        users={usersData}
        editRow={editRowMock}
        deleteUser={deleteUserMock}
      />
    );

    const editButtons = getAllByText("Edit");
    fireEvent.click(editButtons[0]);

    expect(editRowMock).toHaveBeenCalledWith(usersData[0]);
  });

  test("calls deleteUser function with correct user id when Delete button is clicked", () => {
    const { getAllByText } = render(
      <UserTable
        users={usersData}
        editRow={editRowMock}
        deleteUser={deleteUserMock}
      />
    );

    const deleteButtons = getAllByText("Delete");
    fireEvent.click(deleteButtons[1]);

    expect(deleteUserMock).toHaveBeenCalledWith(usersData[1].id);
  });

  test("renders a message when there are no users", () => {
    const { getByText } = render(
      <UserTable users={[]} editRow={editRowMock} deleteUser={deleteUserMock} />
    );

    expect(getByText("No users")).toBeInTheDocument();
  });

  test("does not render Edit and Delete buttons when there are no users", () => {
    const { queryAllByText } = render(
      <UserTable users={[]} editRow={editRowMock} deleteUser={deleteUserMock} />
    );

    const editButtons = queryAllByText("Edit");
    const deleteButtons = queryAllByText("Delete");

    expect(editButtons.length).toBe(0);
    expect(deleteButtons.length).toBe(0);
  });
});
