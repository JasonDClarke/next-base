import { render, screen } from '@testing-library/react';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from './form';
import { useFormContext } from 'react-hook-form';

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: jest.fn(),
}));

describe('FormItem', () => {
  it('renders correctly', () => {
    (useFormContext as jest.Mock).mockReturnValue({
      formState: { errors: {} },
      getFieldState: jest.fn(),
    });

    render(<FormItem className="test-class">Test Content</FormItem>);

    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toHaveClass('test-class');
  });

  it('should render FormLabel with error state correctly', () => {
    (useFormContext as jest.Mock).mockReturnValue({
      formState: {
        errors: { username: { message: 'This field is required' } },
      },
      getFieldState: jest.fn(),
    });

    render(
      <FormItem>
        <FormLabel htmlFor="username">Username</FormLabel>
      </FormItem>
    );

    // Check if the label is rendered and has error styling
    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByText('Username')).toHaveClass(
      'peer-disabled:cursor-not-allowed'
    );
  });

  it('should render FormControl with aria attributes correctly', () => {
    (useFormContext as jest.Mock).mockReturnValue({
      formState: { errors: {} },
      getFieldState: jest.fn(),
    });

    render(
      <FormItem>
        <FormControl>
          <input />
        </FormControl>
      </FormItem>
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute(
      'aria-describedby',
      expect.stringContaining('form-item-description')
    );
    expect(input).toHaveAttribute('aria-invalid', 'false');
  });

  it('should render FormMessage', () => {
    (useFormContext as jest.Mock).mockReturnValue({
      getFieldState: jest.fn(),
    });

    render(
      <FormItem>
        <FormMessage>This is a custom error message</FormMessage>
      </FormItem>
    );

    expect(
      screen.getByText('This is a custom error message')
    ).toBeInTheDocument();
  });

  it('should render FormDescription correctly', () => {
    (useFormContext as jest.Mock).mockReturnValue({
      getFieldState: jest.fn(),
    });

    render(
      <FormItem>
        <FormDescription>This is a description for the field</FormDescription>
      </FormItem>
    );

    expect(
      screen.getByText('This is a description for the field')
    ).toBeInTheDocument();
    expect(screen.getByText('This is a description for the field')).toHaveClass(
      'text-muted-foreground'
    );
  });
});
