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
        dispatchItems(addItemAction(createNewItem(event.target[0].value)))
        insertNewTodoItem(createNewItem(event.target[0].value))
        event.target[0].value = ""
    }

    useEffect(() => {
        if(input!=="") setIsErrorMessage(false)
    }, [input])


    return (
        <form className="add-item-form" onSubmit={addItem}>
            <input placeholder="enter new TODO here" onInput={(event)=>setInput(event.target.value)}/>
            {isErrorMessage && <span className='error-message'>error</span>}
            <FormButton type='submit' color='white' backgroundColor='grey' disabled={isErrorMessage}>ADD</FormButton>

        </form>
    )
}

export default AddItemForm
