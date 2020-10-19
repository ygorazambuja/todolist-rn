import {ADD_TODO, REMOVE_TODO} from '../actions/types';

const initialState = {
    todos: [
        {
            key: 1000,
            title: 'Oi',
            description: 'dausihdasu',
            done: false,
        },
    ],
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat({
                    key: action.data.key,
                    title: action.data.title,
                    description: action.data.description,
                    done: action.data.done,
                }),
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((item) => item.key !== action.key),
            };
        default:
            return state;
    }
};

export default todosReducer;
