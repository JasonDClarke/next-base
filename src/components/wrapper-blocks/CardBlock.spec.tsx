import { render, screen } from '@testing-library/react';
import { CardBlock } from './CardBlock';

describe('CardBlock Component', () => {
  test('renders card with title', () => {
    render(
      <CardBlock title="Test Title" description={null}>
        Content
      </CardBlock>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('renders card with description', () => {
    render(
      <CardBlock title={null} description="Test Description">
        Content
      </CardBlock>
    );

    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  test('renders card with children content', () => {
    render(
      <CardBlock title="Title" description="Description">
        <p>Child Content</p>
      </CardBlock>
    );

    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  test('does not render CardHeader if title and description are missing', () => {
    const { container } = render(
      <CardBlock title={null} description={null}>
        Content
      </CardBlock>
    );

    expect(container.querySelector('header')).toBeNull();
  });
});
