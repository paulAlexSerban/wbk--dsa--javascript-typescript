interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

(() => {
    /**
     * Omit<Type, Keys>
     * Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals)
     * NOTE: The opposite of Pick<Type, Keys>
     */

    type TodoPreview = Omit<Todo, 'description'>;

    // description get omitted
    const todo: TodoPreview = {
        title: 'Clean room',
        completed: false,
        createdAt: 1615544252770,
    };

    todo;
})();

(() => {
    type TodoInfo = Omit<Todo, 'completed' | 'createdAt'>;

    // completed and createdAt get omitted
    const todoInfo: TodoInfo = {
        title: 'Pick up kids',
        description: 'Kindergarten closes at 5pm',
    };
    todoInfo;
})();
