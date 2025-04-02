import { render, screen, fireEvent } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { OtherCheckboxGroupWithLabel } from './OtherCheckboxGroupWithLabel';

const mockData = [
  { id: 'option1', description: 'Option 1' },
  { id: 'option2', description: 'Option 2' },
];

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({ defaultValues: { test: [] } });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('OtherCheckboxGroupWithLabel', () => {
  it('renders correctly', () => {
    render(
      <Wrapper>
        <OtherCheckboxGroupWithLabel
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

  it('checks and unchecks a checkbox', () => {
    render(
      <Wrapper>
        <OtherCheckboxGroupWithLabel
          fieldTitle="Test Field"
          nameInSchema="test"
          data={mockData}
        />
      </Wrapper>
    );

    const option1 = screen.getByLabelText('Option 1');
    fireEvent.click(option1);
    expect(option1).toBeChecked();

    fireEvent.click(option1);
    expect(option1).not.toBeChecked();
  });

  it('toggles the "Other" input field when selecting "Other"', () => {
    render(
      <Wrapper>
        <OtherCheckboxGroupWithLabel
          fieldTitle="Test Field"
          nameInSchema="test"
          data={mockData}
        />
      </Wrapper>
    );

    const otherCheckbox = screen.getByLabelText('Other');
    fireEvent.click(otherCheckbox);

    expect(otherCheckbox).toBeChecked();
    expect(screen.getByPlaceholderText('Please specify')).toBeInTheDocument();

    fireEvent.click(otherCheckbox);
    expect(otherCheckbox).not.toBeChecked();
    expect(
      screen.queryByPlaceholderText('Please specify')
    ).not.toBeInTheDocument();
  });

  it('updates form state when typing in "Other" input', () => {
    render(
      <Wrapper>
        <OtherCheckboxGroupWithLabel
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

  it('disables checkboxes and input when disabled prop is set', () => {
    render(
      <Wrapper>
        <OtherCheckboxGroupWithLabel
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
