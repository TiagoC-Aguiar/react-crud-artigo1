import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditUserForm from "../../../src/components/forms/EditUserForm";

describe("EditUserForm", () => {
  const currentUser = { id: 1, name: "John Doe", username: "johndoe" };
  const mockUpdateUser = jest.fn();
  const mockSetEditing = jest.fn();

  test("renders initial user data in form fields", () => {
    const { getByLabelText } = render(
      <EditUserForm
        currentUser={currentUser}
        updateUser={mockUpdateUser}
        setEditing={mockSetEditing}
      />
    );

    expect(getByLabelText("Name").value).toBe("John Doe");
    expect(getByLabelText("Username").value).toBe("johndoe");
  });

  test("calls updateUser function with correct user data when form is submitted", () => {
    const { getByLabelText, getByText } = render(
      <EditUserForm
        currentUser={currentUser}
        updateUser={mockUpdateUser}
        setEditing={mockSetEditing}
      />
    );

    fireEvent.change(getByLabelText("Name"), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(getByLabelText("Username"), {
      target: { value: "janedoe" },
    });
    fireEvent.click(getByText("Update user"));

    expect(mockUpdateUser).toHaveBeenCalledTimes(1);
    expect(mockUpdateUser).toHaveBeenCalledWith(1, {
      id: 1,
      name: "Jane Doe",
      username: "janedoe",
    });
  });

  test("calls setEditing function with false when cancel button is clicked", () => {
    const { getByText } = render(
      <EditUserForm
        currentUser={currentUser}
        updateUser={mockUpdateUser}
        setEditing={mockSetEditing}
      />
    );

    fireEvent.click(getByText("Cancel"));

    expect(mockSetEditing).toHaveBeenCalledTimes(1);
    expect(mockSetEditing).toHaveBeenCalledWith(false);
  });

  test("updates user state when input fields change", () => {
    const { getByLabelText } = render(
      <EditUserForm
        currentUser={currentUser}
        updateUser={mockUpdateUser}
        setEditing={mockSetEditing}
      />
    );

    fireEvent.change(getByLabelText("Name"), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(getByLabelText("Username"), {
      target: { value: "janedoe" },
    });

    expect(getByLabelText("Name").value).toBe("Jane Doe");
    expect(getByLabelText("Username").value).toBe("janedoe");
  });

  test("calls updateUser function with correct user data when form is submitted with Enter key", () => {
    const { getByLabelText } = render(
      <EditUserForm
        currentUser={currentUser}
        updateUser={mockUpdateUser}
        setEditing={mockSetEditing}
      />
    );

    fireEvent.change(getByLabelText("Name"), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(getByLabelText("Username"), {
      target: { value: "janedoe" },
    });
    fireEvent.submit(getByLabelText("Name"));

    expect(mockUpdateUser).toHaveBeenCalledTimes(1);
    expect(mockUpdateUser).toHaveBeenCalledWith(1, {
      id: 1,
      name: "Jane Doe",
      username: "janedoe",
    });
  });
});
