const makeTodos = (n) => {      //n элементов задач,по умолчанию 15
    const num = n || 15;
    const todos = [];
    for(let i=0; i<num; i++) {
        todos.push({
            id: i,
            userId: i,
            title: `Todo item ${i}`,
            completed: [true,false][Math.floor(Math.random() * 2)],
        });
    }
    return todos;
};

export const todos = makeTodos(200);