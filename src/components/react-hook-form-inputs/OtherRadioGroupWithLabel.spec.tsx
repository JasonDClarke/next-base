import { render, screen, fireEvent } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { OtherRadioGroupWithLabel } from './OtherRadioGroupWithLabel';

const mockData = [
  { id: 'option1', description: 'Option 1' },
  { id: 'option2', description: 'Option 2' },
];

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('OtherRadioGroupWithLabel', () => {
  it('renders correctly', () => {
    render(
      <Wrapper>
        <OtherRadioGroupWithLabel
          fieldTitle="Test Field"
          nameInSchema="test"
          data={mockData}
        />
      </Wrapper>
    );

    expect(screen.getByText('Test Field')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Other')).toBeInTheDocument();
  });

  it('selects a radio option and updates form state', () => {
    render(
      <Wrapper>
        <OtherRadioGroupWithLabel
          fieldTitle="Test Field"
          nameInSchema="test"
          data={mockData}
        />
      </Wrapper>
    );

    const option1 = screen.getByLabelText('Option 1');
    fireEvent.click(option1);

    expect(option1).toBeChecked();
  });

  it('toggles the input field when "Other" is selected', () => {
    render(
      <Wrapper>
        <OtherRadioGroupWithLabel
          fieldTitle="Test Field"
          nameInSchema="test"
          data={mockData}
        />
      </Wrapper>
    );

    const otherOption = screen.getByLabelText('Other');
    fireEvent.click(otherOption);

    expect(otherOption).toBeChecked();
    expect(screen.getByPlaceholderText('Please specify')).toBeInTheDocument();
  });

  it('updates the form state when typing in "Other" input', () => {
    render(
      <Wrapper>
        <OtherRadioGroupWithLabel
          fieldTitle="Test Field"
          nameInSchema="test"
          data={mockData}
        />
      </Wrapper>
    );

    fireEvent.click(screen.getByLabelText('Other'));
    const input = screen.getByPlaceholderText('Please specify');

    fireEvent.change(input, { target: { value: 'Custom option' } });
    expect(input).toHaveValue('Custom option');
  });

  it('disables all inputs when the disabled prop is true', () => {
    render(
      <Wrapper>
        <OtherRadioGroupWithLabel
          fieldTitle="Test Field"
          nameInSchema="test"
          data={mockData}
          disabled
        />
      </Wrapper>
    );

    expect(screen.getByLabelText('Option 1')).toBeDisabled();
    expect(screen.getByLabelText('Option 2')).toBeDisabled();
    expect(screen.getByLabelText('Other')).toBeDisabled();
  });
});
