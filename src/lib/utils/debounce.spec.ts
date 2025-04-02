import { debounce } from './debounce';
jest.useFakeTimers();

describe('debounce function', () => {
  let mockFunction: jest.Mock;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let debouncedFunction: (...args: any[]) => void;

  beforeEach(() => {
    mockFunction = jest.fn();
    debouncedFunction = debounce(mockFunction, 300);
  });

  test('should call the function after the specified delay', () => {
    debouncedFunction();
    expect(mockFunction).not.toHaveBeenCalled();

    jest.advanceTimersByTime(300);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  test('should cancel previous calls within delay period', () => {
    debouncedFunction();
    debouncedFunction();
    debouncedFunction();

    jest.advanceTimersByTime(299);
    expect(mockFunction).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  test('should pass the correct arguments to the function', () => {
    debouncedFunction('arg1', 42);

    jest.advanceTimersByTime(300);
    expect(mockFunction).toHaveBeenCalledWith('arg1', 42);
  });
});
