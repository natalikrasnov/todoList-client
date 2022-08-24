import { createNewItem } from '../utils/TodoListItem';

export const listItemInitialState = [];

const ActiveItemsListReducer = (items, action) => {
  console.log("reducer", action)
  switch (action.type) {
    case "SET_ITEMS":
      return [...action.items]
    case "ADD_ITEM":
      return [ ...items, action.item ];
    case "ITEM_DONE":
      return items.map((el) => {
        if (el.id === action.itemId) el.complete = action.isDone;
        return el;
      });
    case "DELETE_ITEM":
      return items.filter((el) => el.id !== action.itemId);
    default:
      return [...items];
  }
};

export default ActiveItemsListReducer;
