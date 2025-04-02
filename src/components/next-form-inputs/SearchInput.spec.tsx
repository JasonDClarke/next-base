import { render, screen, fireEvent } from '@testing-library/react';
import { SearchInput } from './SearchInput';

jest.mock('next/form', () => ({
  __esModule: true,
  ...jest.requireActual('next/form'),
  default: ({
    children,
    ...props
  }: {
    action: string;
    children: React.ReactNode;
  }) => <form {...props}>{children}</form>,
}));

describe('SearchInput', () => {
  it('renders the search input with the correct placeholder', () => {
    render(<SearchInput action="/search" placeholder="Search for projects" />);

    const input = screen.getByPlaceholderText('Search for projects');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'searchText');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('placeholder', 'Search for projects');
  });

  it('renders the SearchButton inside the form', () => {
    render(<SearchInput action="/search" placeholder="Search" />);

    const searchButton = screen.getByRole('button');

    expect(searchButton).toBeInTheDocument();
  });

  it('calls the action when the form is submitted', () => {
    const formAction = '/search';
    const { container } = render(
      <SearchInput action={formAction} placeholder="Search" />
    );

    const form = container.querySelector('form');
    const input = screen.getByPlaceholderText('Search');
    const searchButton = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'test' } });

    fireEvent.click(searchButton);

    expect(form).toHaveAttribute('action', formAction);
  });
});
