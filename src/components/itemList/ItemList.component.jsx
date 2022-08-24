import {  useContext } from 'react'
import './ItemList.style.scss'

import {deleteTodoItem, updateTodo} from '../../service/server'
import { TodoListContext } from '../../context/TodoList.context'
import {deleteItemAction , ItemDoneAction} from '../../action/TodoList.action'

function ItemList({data}) {
  
    const { dispatchItems } = useContext(TodoListContext);

    const deleteItem = (event) => {
        event.preventDefault()
        dispatchItems(deleteItemAction(data.id))
        deleteTodoItem({id: data.id})
    }

    const doneundone = (event) => {
        console.log(event, data)
        dispatchItems(ItemDoneAction(data.id, event.target.checked))
        updateTodo({id: data.id, complete: event.target.checked})
    }

    return (
        <div className="item-list">
            <label className={data.complete ? 'done' : ''}>
                <input className='checkbox' type="checkbox" checked={data.complete} onChange={doneundone} />
                {data.task}
            </label>
            <button className='button-delete' onClick={deleteItem}>X</button>
        </div>
    )
}

export default ItemList
