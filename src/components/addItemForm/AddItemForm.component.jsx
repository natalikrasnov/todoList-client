import {  useContext, useState ,useEffect} from 'react'
import './AddItemForm.style.scss'
import { TodoListContext } from '../../context/TodoList.context'
import {addItemAction} from '../../action/TodoList.action'
import FormButton from '../button/FormButton.component';
import {insertNewTodoItem} from '../../service/server'
import { createNewItem } from '../../utils/TodoListItem'

function AddItemForm() {
  
    const { dispatchItems } = useContext(TodoListContext);
    const [input, setInput] = useState(null)
    const [isErrorMessage, setIsErrorMessage] = useState(true)

    const addItem = (event) => {
        event.preventDefault()
        if (event.target[0].value === "") {
            setIsErrorMessage(true)
            return
        } 
        debugger
        dispatchItems(addItemAction(createNewItem(event.target[0].value)))
        insertNewTodoItem(createNewItem(event.target[0].value))
        event.target[0].value = ""
    }

    useEffect(() => {
        if(input!=="") setIsErrorMessage(false)
    }, [input])


    return (
        <form className="add-item-form" onSubmit={addItem}>
            <div>
                <input onInput={(event)=>setInput(event.target.value)}/>
                <FormButton type='submit' color='white' backgroundColor='grey'>ADD</FormButton>
            </div>
            {isErrorMessage && <label className='error-message'>error</label>}
        </form>
    )
}

export default AddItemForm
