import { render, screen, fireEvent } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { RadioGroupWithLabel } from './RadioGroupWithLabel';

describe('RadioGroupWithLabel', () => {
  const renderComponent = (defaultValues = { testField: '' }) => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => {
      const methods = useForm({ defaultValues });
      return <FormProvider {...methods}>{children}</FormProvider>;
    };

    render(
      <Wrapper>
        <RadioGroupWithLabel
          fieldTitle="Test Field"
          nameInSchema="testField"
          data={[
            { id: 'option1', description: 'Option 1' },
            { id: 'option2', description: 'Option 2' },
          ]}
        />
      </Wrapper>
    );
  };

  test('renders correctly with given options', () => {
    renderComponent();
    expect(screen.getByText('Test Field')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
  });

  test('selecting an option updates the value', () => {
    renderComponent();
    const option1 = screen.getByLabelText('Option 1');
    fireEvent.click(option1);
    expect(option1).toBeChecked();
  });
});
