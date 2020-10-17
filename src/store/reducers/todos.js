import {ADD_TODO, REMOVE_TODO} from '../actions/types';

const initialState = {
    todos: [],
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat({
                    key: Math.random(),
                    title: action.data.title,
                    description: action.data.description,
                }),
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((item) => item.key != action.key),
            };
        default:
            return state;
    }
};

export default todosReducer;
