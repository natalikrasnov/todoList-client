import {  useContext } from 'react'
import './MainDisplay.style.scss'
import List from '../list/List.component'
import TodoListContextProvider, { TodoListContext } from '../../context/TodoList.context'

function MainDisplay() {
  

    return (
        <TodoListContextProvider>
            <div className="main-display">
                <h1>TO DO LIST</h1>
                <List />                 
            </div>
        </TodoListContextProvider>
    )
}

export default MainDisplay
