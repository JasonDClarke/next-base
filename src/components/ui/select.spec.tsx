import { render, screen } from '@testing-library/react';
import { Select, SelectTrigger, SelectContent, SelectItem } from './select';
import userEvent from '@testing-library/user-event';

const reliableClick = async (element: Element) =>
  await userEvent.click(element, {
    pointerState: await userEvent.pointer({ target: element }),
  });

describe('Select Component', () => {
  test('renders select trigger', () => {
    render(
      <Select>
        <SelectTrigger>Choose an option</SelectTrigger>
      </Select>
    );
    expect(screen.getByText('Choose an option')).toBeInTheDocument();
  });

  test('opens select dropdown when clicked', async () => {
    render(
      <Select>
        <SelectTrigger>Choose an option</SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );

    const trigger = screen.getByText('Choose an option');
    await userEvent.click(trigger);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  test('selects an option when clicked', async () => {
    render(
      <Select>
        <SelectTrigger>Choose an option</SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );

    const trigger = screen.getByText('Choose an option');
    await reliableClick(trigger);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    const option = screen.getByText('Option 1');
    await reliableClick(option);
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });
});
