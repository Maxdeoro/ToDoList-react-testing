import { todos } from "../makeTodos";

export  /*const axs =*/default {
    get: jest.fn().mockImplementation((url) => {
        switch(url) {
            case "https://jsonplaceholder.typicode.com/todos":
                return Promise.resolve({data: todos});
            default:
                throw new Error(`UNMATCHED URL: ${url}`);
        }
    })
};