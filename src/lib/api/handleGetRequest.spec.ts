import { handleGetRequest } from './handleGetRequest';
import { defaultResponse } from './defaultResponse';
import { apiError } from './error';

jest.mock('./defaultResponse', () => ({
  defaultResponse: jest.fn(),
}));

jest.mock('./error', () => ({
  apiError: jest.fn(),
}));

describe('handleGetRequest', () => {
  it('should return a default response when fn resolves successfully', async () => {
    const mockFn = jest.fn().mockResolvedValue('mockData');
    const errorMessage = 'Test error message';

    await handleGetRequest(mockFn, errorMessage);

    expect(defaultResponse).toHaveBeenCalledWith({ result: 'mockData' });
    expect(apiError).not.toHaveBeenCalled();
  });

  it('should call apiError when fn throws an error', async () => {
    const mockError = new Error('Fetch failed');
    const mockFn = jest.fn().mockRejectedValue(mockError);
    const errorMessage = 'Test error message';

    await handleGetRequest(mockFn, errorMessage);

    expect(apiError).toHaveBeenCalledWith(mockError, errorMessage);
    expect(defaultResponse).not.toHaveBeenCalled();
  });
});
