import { render, fireEvent } from '@testing-library/react';
import { Input } from '~/user/components';

describe('Input component', () => {
  test('does not update value when onChange event handler does not update the value', () => {
    const mockChangeHandler = jest.fn();
    const initialValue = 'Initial Value';

    const { getByLabelText } = render(
      <Input
        name="name"
        label="Name"
        value={initialValue}
        onChange={mockChangeHandler}
      />
    );

    const input = getByLabelText('Name') as HTMLInputElement;
    fireEvent.change(input, { target: { value: initialValue } });

    expect(mockChangeHandler).not.toHaveBeenCalled();
    expect(input.value).toBe(initialValue);
  });

  test('renders label and input element correctly', () => {
    const { getByLabelText, container } = render(<Input label="Name" />);
    const labelElement = getByLabelText('Name');
    const inputElement = container.querySelector('input');

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  test('passes through additional props to input element', () => {
    const { getByLabelText, container } = render(
      <Input label="Name" className="custom-input" />
    );
    const inputElement = container.querySelector('input');

    expect(inputElement).toHaveClass('custom-input');
  });
});
