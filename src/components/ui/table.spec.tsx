import { render, screen } from '@testing-library/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from './table';

describe('Table Components', () => {
  test('Table renders correctly with given className', () => {
    render(<Table className="custom-class" />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
    expect(tableElement).toHaveClass(
      'w-full caption-bottom text-sm custom-class'
    );
  });

  test('TableHeader renders correctly with given className', () => {
    render(<TableHeader className="header-class" />);
    const tableHeaderElement = screen.getByRole('rowgroup');
    expect(tableHeaderElement).toBeInTheDocument();
    expect(tableHeaderElement).toHaveClass('header-class');
  });

  test('TableBody renders correctly with given className', () => {
    render(<TableBody className="body-class" />);
    const tableBodyElement = screen.getByRole('rowgroup');
    expect(tableBodyElement).toBeInTheDocument();
    expect(tableBodyElement).toHaveClass('body-class');
  });

  test('TableFooter renders correctly with given className', () => {
    render(<TableFooter className="footer-class" />);
    const tableFooterElement = screen.getByRole('rowgroup');
    expect(tableFooterElement).toBeInTheDocument();
    expect(tableFooterElement).toHaveClass('footer-class');
  });

  test('TableRow renders correctly with given className', () => {
    render(<TableRow className="row-class" />);
    const tableRowElement = screen.getByRole('row');
    expect(tableRowElement).toBeInTheDocument();
    expect(tableRowElement).toHaveClass(
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted row-class'
    );
  });

  test('TableHead renders correctly with given className', () => {
    render(<TableHead className="head-class" />);
    const tableHeadElement = screen.getByRole('columnheader');
    expect(tableHeadElement).toBeInTheDocument();
    expect(tableHeadElement).toHaveClass(
      'h-10 px-2 text-left align-middle font-medium text-muted-foreground head-class'
    );
  });

  test('TableCell renders correctly with given className', () => {
    render(<TableCell className="cell-class" />);
    const tableCellElement = screen.getByRole('cell');
    expect(tableCellElement).toBeInTheDocument();
    expect(tableCellElement).toHaveClass('p-2 align-middle cell-class');
  });

  test('TableCaption renders correctly with given className', () => {
    render(<TableCaption className="caption-class" />);
    const tableCaptionElement = screen.getByRole('caption');
    expect(tableCaptionElement).toBeInTheDocument();
    expect(tableCaptionElement).toHaveClass(
      'mt-4 text-sm text-muted-foreground caption-class'
    );
  });
});
