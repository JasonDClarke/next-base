import { render, screen, fireEvent } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { CheckboxWithLabel } from './CheckboxWithLabel';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({ defaultValues: { test: false } });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('CheckboxWithLabel', () => {
  it('renders correctly with label and message', () => {
    render(
      <Wrapper>
        <CheckboxWithLabel
          fieldTitle="Accept Terms"
          nameInSchema="test"
          message="I agree to the terms"
        />
      </Wrapper>
    );

    expect(screen.getByText('Accept Terms')).toBeInTheDocument();
    expect(screen.getByText('I agree to the terms')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('updates form state when clicked', () => {
    render(
      <Wrapper>
        <CheckboxWithLabel
          fieldTitle="Accept Terms"
          nameInSchema="test"
          message="I agree to the terms"
        />
      </Wrapper>
    );

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('disables checkbox when disabled prop is set', () => {
    render(
      <Wrapper>
        <CheckboxWithLabel
          fieldTitle="Accept Terms"
          nameInSchema="test"
          message="I agree to the terms"
          disabled
        />
      </Wrapper>
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });
});
