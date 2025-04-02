import { render, screen } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { SelectWithLabel } from './SelectWithLabel';

describe('SelectWithLabel', () => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const methods = useForm();
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  const data = [
    { id: '1', description: 'Option 1' },
    { id: '2', description: 'Option 2' },
  ];

  test('renders with correct label', () => {
    render(
      <Wrapper>
        <SelectWithLabel
          fieldTitle="Test Label"
          nameInSchema="testField"
          data={data}
        />
      </Wrapper>
    );

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(
      <Wrapper>
        <SelectWithLabel
          fieldTitle="Test Label"
          nameInSchema="testField"
          data={data}
          className="custom-class"
        />
      </Wrapper>
    );

    const selectTrigger = screen.getByRole('combobox');
    expect(selectTrigger).toHaveClass('custom-class');
  });
});
