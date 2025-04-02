import { render, screen, fireEvent } from '@testing-library/react';
import { HeaderSearchInput } from './HeaderSearchInput';

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

describe('HeaderSearchInput', () => {
  it('renders the search input with the correct placeholder', () => {
    render(
      <HeaderSearchInput action="/search" placeholder="Search for items" />
    );

    const input = screen.getByPlaceholderText('Search for items');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'searchText');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('placeholder', 'Search for items');
  });

  it('renders the SearchIconButton inside the form', () => {
    render(<HeaderSearchInput action="/search" placeholder="Search" />);

    const searchButton = screen.getByRole('button');

    expect(searchButton).toBeInTheDocument();
  });

  it('calls the action when the form is submitted', () => {
    const formAction = '/search';
    const { container } = render(
      <HeaderSearchInput action={formAction} placeholder="Search" />
    );

    const form = container.querySelector('form');
    const input = screen.getByPlaceholderText('Search');
    const searchButton = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'test' } });

    fireEvent.click(searchButton);

    expect(form).toHaveAttribute('action', formAction);
  });
});
