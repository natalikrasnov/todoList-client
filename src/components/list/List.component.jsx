import {  useContext ,useEffect} from 'react'
import './List.style.scss'
import ItemList from '../itemList/ItemList.component';
import { TodoListContext } from '../../context/TodoList.context'
import {getAllTodoItems} from '../../service/server'
import { setItemsAction } from '../../action/TodoList.action'
import CounterItemList from '../countItems/CounterItemList.component'
import AddItemForm from '../addItemForm/AddItemForm.component'

function List() {
  
    const { items, dispatchItems } = useContext(TodoListContext);

    useEffect(() => {
        const get = async () => {
            const items =  await getAllTodoItems()
            dispatchItems(setItemsAction(items))
        }
        get()
    },[])

    return (
        <div className="list"> 
            <CounterItemList />
            {!items || items.length == 0
                ?
                <span className='empty-list-message'>
                    - your list is empty -
                </span>
                :
                items.map((item, index) => (
                    <ItemList data={item} key={index} />
                    )
                )
            }
            <AddItemForm />
        </div>
    )
}

export default List
