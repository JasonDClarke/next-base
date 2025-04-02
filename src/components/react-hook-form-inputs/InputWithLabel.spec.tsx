import { render, screen, fireEvent } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { InputWithLabel } from './InputWithLabel';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({ defaultValues: { test: '' } });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('InputWithLabel', () => {
  it('renders correctly with a label', () => {
    render(
      <Wrapper>
        <InputWithLabel fieldTitle="Test Field" nameInSchema="test" />
      </Wrapper>
    );

    expect(screen.getByText('Test Field')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('updates form state when typing', () => {
    render(
      <Wrapper>
        <InputWithLabel fieldTitle="Test Field" nameInSchema="test" />
      </Wrapper>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Hello' } });

    expect(input).toHaveValue('Hello');
  });

  it('applies custom class names correctly', () => {
    render(
      <Wrapper>
        <InputWithLabel
          fieldTitle="Test Field"
          nameInSchema="test"
          className="custom-input"
          labelClassName="custom-label"
          formItemClassName="custom-form-item"
        />
      </Wrapper>
    );

    expect(screen.getByText('Test Field')).toHaveClass('custom-label');
    expect(screen.getByRole('textbox')).toHaveClass('custom-input');
  });

  it('disables input when disabled prop is set', () => {
    render(
      <Wrapper>
        <InputWithLabel fieldTitle="Test Field" nameInSchema="test" disabled />
      </Wrapper>
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });
});
