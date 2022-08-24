import axios from "axios";

const baseURL = "http://localhost:3004/todo";

const checkSuccess = (result) => {
    if (result.status < 300 && result.data.status == "ok") return true
    alert("error server")
    return false
}

const getDataResult = (result) => {
    if (checkSuccess(result)) return result.data.data;
    else return null
}

export const getAllTodoItems = async () => {
    const result = await axios.get(baseURL)
    return getDataResult(result)
};


export const insertNewTodoItem = async (data) => {
  const result = await axios.put(baseURL, data);
  return getDataResult(result);
};

export const deleteTodoItem = async (data) => {

  const result = await axios.delete(baseURL, data);
  return getDataResult(result);
};

export const searchTodo = async (data) => {
    const result = await axios.get(baseURL +'/item', { q: data });
  return getDataResult(result);
};


export const updateTodo = async (data) => {
  const result = await axios.patch(baseURL, data);
  return getDataResult(result);
};