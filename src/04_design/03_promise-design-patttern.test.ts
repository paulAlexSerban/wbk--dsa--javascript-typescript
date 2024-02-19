// Import the functions to test
import { fetchTodoDataPromise, fetchUserTodoDataAsync } from './03_promise-design-pattern'; // Update this path
import fetchMock from 'jest-fetch-mock';
describe('fetchTodoDataPromise', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test('fetches todo data successfully using promises', async () => {
        const mockTodoData = { userId: 1, id: 1, title: 'Test Todo', completed: false };
        fetchMock.mockResponseOnce(JSON.stringify(mockTodoData));

        const data = await fetchTodoDataPromise(1);
        expect(fetchMock).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
        expect(data).toEqual(mockTodoData);
    });

    test('handles network error using promises', async () => {
        fetchMock.mockReject(new Error('Network Error'));

        await expect(fetchTodoDataPromise(1)).rejects.toThrow('Network Error');
    });

    test('throws an error when response is not ok', () => {
        fetchMock.mockResponseOnce('', { status: 404 }); // Simulate an error response

        // We expect the promise to be rejected with an error message
        expect(fetchTodoDataPromise(1)).rejects.toThrow('Network response was not ok');
    });
});

describe('fetchUserTodoDataAsync', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test('fetches todo data successfully using async/await', async () => {
        const mockTodoData = { userId: 1, id: 1, title: 'Test Todo', completed: false };
        fetchMock.mockResponseOnce(JSON.stringify(mockTodoData));

        const data = await fetchUserTodoDataAsync(1);
        expect(fetchMock).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
        expect(data).toEqual(mockTodoData);
    });

    test('handles network error using async/await', async () => {
        fetchMock.mockReject(new Error('Network Error'));

        await expect(fetchUserTodoDataAsync(1)).rejects.toThrow('Network Error');
    });

    test('throws error when response is not ok', async () => {
        fetchMock.mockResponseOnce('', { status: 404 });

        await expect(fetchUserTodoDataAsync(1)).rejects.toThrow('Network response was not ok');
    });

    test('catches network errors', async () => {
        fetchMock.mockReject(new Error('Failed to fetch'));

        await expect(fetchUserTodoDataAsync(1)).rejects.toThrow('Failed to fetch');
    });
});
