import { render, screen, fireEvent } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { CheckboxGroupWithLabel } from './CheckboxGroupWithLabel';

const mockData = [
  { id: 'option1', description: 'Option 1' },
  { id: 'option2', description: 'Option 2' },
  { id: 'option3', description: 'Option 3' },
];

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({ defaultValues: { test: [] } });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('CheckboxGroupWithLabel', () => {
  it('renders correctly with checkboxes and labels', () => {
    render(
      <Wrapper>
        <CheckboxGroupWithLabel
          fieldTitle="Select Options"
          nameInSchema="test"
          data={mockData}
        />
      </Wrapper>
    );

    expect(screen.getByText('Select Options')).toBeInTheDocument();
    mockData.forEach((item) => {
      expect(screen.getByLabelText(item.description)).toBeInTheDocument();
    });
  });

  it('allows selecting and unselecting checkboxes', () => {
    render(
      <Wrapper>
        <CheckboxGroupWithLabel
          fieldTitle="Select Options"
          nameInSchema="test"
          data={mockData}
        />
      </Wrapper>
    );

    const checkbox1 = screen.getByLabelText('Option 1');
    const checkbox2 = screen.getByLabelText('Option 2');

    // Initially unchecked
    expect(checkbox1).not.toBeChecked();
    expect(checkbox2).not.toBeChecked();

    // Select checkboxes
    fireEvent.click(checkbox1);
    expect(checkbox1).toBeChecked();

    fireEvent.click(checkbox2);
    expect(checkbox2).toBeChecked();

    // Unselect a checkbox
    fireEvent.click(checkbox1);
    expect(checkbox1).not.toBeChecked();
  });

  it('allows multiple selections', () => {
    render(
      <Wrapper>
        <CheckboxGroupWithLabel
          fieldTitle="Select Options"
          nameInSchema="test"
          data={mockData}
        />
      </Wrapper>
    );

    const checkbox1 = screen.getByLabelText('Option 1');
    const checkbox2 = screen.getByLabelText('Option 2');
    const checkbox3 = screen.getByLabelText('Option 3');

    fireEvent.click(checkbox1);
    fireEvent.click(checkbox2);
    fireEvent.click(checkbox3);

    expect(checkbox1).toBeChecked();
    expect(checkbox2).toBeChecked();
    expect(checkbox3).toBeChecked();
  });

  it('disables checkboxes when disabled prop is set', () => {
    render(
      <Wrapper>
        <CheckboxGroupWithLabel
          fieldTitle="Select Options"
          nameInSchema="test"
          data={mockData}
          disabled
        />
      </Wrapper>
    );

    mockData.forEach((item) => {
      const checkbox = screen.getByLabelText(item.description);
      expect(checkbox).toBeDisabled();
    });
  });
});
