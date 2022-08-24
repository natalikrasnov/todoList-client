import React, { createContext, useReducer } from 'react';

import ActiveItemsListReducer, { listItemInitialState  } from '../reducer/TodoLiat.reducer';

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
    const [items, dispatchItems] = useReducer(ActiveItemsListReducer,  listItemInitialState);

    return (
        <TodoListContext.Provider value={ { items, dispatchItems } }>
            {props.children }
        </TodoListContext.Provider>
    );
}; 


export default TodoListContextProvider;