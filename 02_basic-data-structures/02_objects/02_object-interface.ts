interface Todo {
  id: number,
  title: string,
  completed: boolean
}

const todo: Todo = {
  id: 1,
  title: "delectus aut autem",
  completed: false
}

const logObject = (obj: Todo) => {
  console.log(`id: ${obj.id}, title: ${obj.title}, completed: ${obj.completed}`);
}

logObject(todo)