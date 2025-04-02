import { render, screen } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { TextAreaWithLabel } from './TextAreaWithLabel';

describe('TextAreaWithLabel', () => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const methods = useForm();
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  test('renders with correct label', () => {
    render(
      <Wrapper>
        <TextAreaWithLabel fieldTitle="Test Label" nameInSchema="testField" />
      </Wrapper>
    );

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  test('renders with correct name attribute', () => {
    render(
      <Wrapper>
        <TextAreaWithLabel fieldTitle="Test Label" nameInSchema="testField" />
      </Wrapper>
    );

    const textarea = screen.getByLabelText('Test Label');
    expect(textarea).toHaveAttribute('name', 'testField');
  });

  test('applies custom className', () => {
    render(
      <Wrapper>
        <TextAreaWithLabel
          fieldTitle="Test Label"
          nameInSchema="testField"
          className="custom-class"
        />
      </Wrapper>
    );

    const textarea = screen.getByLabelText('Test Label');
    expect(textarea).toHaveClass('custom-class');
  });
});
