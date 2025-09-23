type TodoType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};


function fetchTodoDataPromise(todoId: number): Promise<TodoType | void> {
  const apiUrl = `https://jsonplaceholder.typicode.com/todos/${todoId}`;

  return fetch(apiUrl)
      .then((response) => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .catch((error) => {
          // console.error('There has been a problem with your fetch operation:', error);
          throw error; // Throw the error to make it catchable by the tests
      });
}

// Adjusting the async function to return the todo data or throw an error
async function fetchUserTodoDataAsync(todoId: number): Promise<TodoType | void> {
  try {
      const apiUrl = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const userData = await response.json();
      return userData; // Return the fetched data
  } catch (error) {
      // console.error('There has been a problem with your fetch operation:', error);
      throw error; // Throw the error to make it catchable by the tests
  }
}


export { fetchTodoDataPromise, fetchUserTodoDataAsync };
