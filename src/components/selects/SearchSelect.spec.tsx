import { render, screen, fireEvent } from '@testing-library/react';
import { SearchSelect } from './SearchSelect';

describe('SearchSelect Component', () => {
  const mockData = [
    { id: 'opt1', description: 'Option 1', subDescription: 'Sub 1' },
    { id: 'opt2', description: 'Option 2', subDescription: 'Sub 2' },
  ];

  it('renders select dropdown with options', () => {
    render(
      <SearchSelect
        action="test"
        placeholder="Select an option"
        data={mockData}
        ariaLabel="Test Select"
      />
    );

    // Ensure the select trigger is present
    const selectTrigger = screen.getByRole('combobox', { name: 'Test Select' });
    expect(selectTrigger).toBeInTheDocument();
    expect(screen.getByText('Select an option')).toBeInTheDocument();

    fireEvent.click(selectTrigger);

    mockData.forEach((item) => {
      expect(screen.getByText(item.description)).toBeInTheDocument();
      expect(screen.getByText(item.subDescription)).toBeInTheDocument();
    });
  });

  it('updates selected value when an option is clicked', () => {
    render(
      <SearchSelect
        action="test"
        placeholder="Select an option"
        data={mockData}
        ariaLabel="Test Select"
      />
    );

    const selectTrigger = screen.getByRole('combobox', { name: 'Test Select' });

    fireEvent.click(selectTrigger);
    fireEvent.click(screen.getByText('Option 2'));

    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Sub 2')).toBeInTheDocument();
  });
});
