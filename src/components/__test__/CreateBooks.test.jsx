import { render } from "@testing-library/react";
import { User } from '../../App';
import CreateBooks from "../CreateBooks";


// Mock the context value
jest.mock('../../App', () => ({
    User: {
      currentUser: { id: 'mockUserId' }, // Provide a mock user ID
    },
  }));

describe('Test Book Creation', () => {
  test('Check title', () => {
    const { getByTestId } = render(<CreateBooks />);
    const titleElement = getByTestId("bookTitle");
    expect(titleElement).toBeTruthy();
  });
});