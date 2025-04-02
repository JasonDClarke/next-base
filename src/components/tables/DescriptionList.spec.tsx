import { render, screen } from '@testing-library/react';
import DescriptionList from './DescriptionList';

describe('DescriptionList Component', () => {
  test('renders DescriptionList with items', () => {
    const items = [
      ['Name', 'John Doe'],
      ['Age', 30],
      ['Location', 'New York'],
    ] as [string, string | number][];

    render(<DescriptionList items={items} />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('New York')).toBeInTheDocument();
  });

  test('filters out null values from items', () => {
    const items = [['Name', 'Alice'], null, ['Country', 'USA']] as (
      | [string, string | number]
      | null
    )[];

    render(<DescriptionList items={items} />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Country')).toBeInTheDocument();
    expect(screen.getByText('USA')).toBeInTheDocument();
    expect(screen.queryByText('null')).not.toBeInTheDocument();
  });

  test('applies correct class names', () => {
    const { container } = render(
      <DescriptionList items={[['Label', 'Value']]} />
    );

    expect(container.firstChild).toHaveClass('rounded-lg border bg-muted p-4');
  });
});
