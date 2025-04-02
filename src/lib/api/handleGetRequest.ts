import { defaultResponse } from './defaultResponse';
import { apiError } from './error';

// handles get requests without parameters
export async function handleGetRequest<T>(
  fn: () => Promise<T>,
  errorMessage: string
) {
  try {
    const result = await fn();
    return defaultResponse({ result });
  } catch (error) {
    return apiError(error, errorMessage);
  }
}
