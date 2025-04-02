import { render, screen, fireEvent } from '@testing-library/react';
import { UISelect } from './UiSelect';

describe('UISelect Component', () => {
  const mockData = [
    {
      id: 'option1',
      description: 'Option 1',
      component: <div data-testid="component-1">Component 1</div>,
    },
    {
      id: 'option2',
      description: 'Option 2',
      component: <div data-testid="component-2">Component 2</div>,
    },
  ];

  it('renders select dropdown with options', () => {
    render(<UISelect id="test" data={mockData} ariaLabel="Test Select" />);

    // Ensure the select trigger is present
    const selectTrigger = screen.getByRole('combobox', { name: 'Test Select' });
    expect(selectTrigger).toBeInTheDocument();

    // Open the dropdown
    fireEvent.click(selectTrigger);

    // Ensure options are rendered
    mockData.forEach((item) => {
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it('renders the default selected component', () => {
    render(
      <UISelect
        id="test"
        data={mockData}
        ariaLabel="Test Select"
        defaultValue="option1"
      />
    );

    // Ensure the correct component is displayed initially
    expect(screen.getByTestId('component-1')).toBeInTheDocument();
  });

  it('updates displayed component when selection changes', () => {
    render(<UISelect id="test" data={mockData} ariaLabel="Test Select" />);

    const selectTrigger = screen.getByRole('combobox', { name: 'Test Select' });

    // Open dropdown and select "Option 2"
    fireEvent.click(selectTrigger);
    fireEvent.click(screen.getByText('Option 2'));

    // Ensure the new component appears
    expect(screen.getByTestId('component-2')).toBeInTheDocument();
  });
});
