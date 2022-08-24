import {  useContext, useMemo } from 'react'
import './CounterItemList.style.scss'
import  { TodoListContext } from '../../context/TodoList.context'

function CounterItemList() {
  
    const { items } = useContext(TodoListContext);
    
    const getDoneUndone = () => {
        let counter = 0
        items.forEach(element => {
            if(!element.complete) counter++
        });
        return counter
    }

    const undone = useMemo(()=> getDoneUndone(), [items])

    return (
        <div className="counter">
            <label> undone: { undone } (total { items.length }) </label>
        </div>
    )
}

export default CounterItemList
