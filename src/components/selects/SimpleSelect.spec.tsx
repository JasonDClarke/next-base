import { render, screen, fireEvent } from '@testing-library/react';
import { SimpleSelect } from './SimpleSelect';

describe('SimpleSelect Component', () => {
  const mockData = [
    { id: 'option1', description: 'Option 1' },
    { id: 'option2', description: 'Option 2' },
  ];

  it('renders select dropdown with options', () => {
    render(<SimpleSelect id="test" data={mockData} ariaLabel="Test Select" />);

    const selectTrigger = screen.getByRole('combobox', { name: 'Test Select' });
    expect(selectTrigger).toBeInTheDocument();

    fireEvent.click(selectTrigger);

    mockData.forEach((item) => {
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it('renders the default selected value', () => {
    render(
      <SimpleSelect
        id="test"
        data={mockData}
        ariaLabel="Test Select"
        defaultValue="option1"
      />
    );

    // Ensure the correct default value is displayed
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('updates selected value when an option is clicked', () => {
    render(<SimpleSelect id="test" data={mockData} ariaLabel="Test Select" />);

    const selectTrigger = screen.getByRole('combobox', { name: 'Test Select' });

    fireEvent.click(selectTrigger);
    fireEvent.click(screen.getByText('Option 2'));

    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });
});
