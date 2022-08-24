export const addItemAction = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const setItemsAction = (items) => ({
  type: "SET_ITEMS",
  items,
});

export const ItemDoneAction = (itemId, isDone) => ({
  type: "ITEM_DONE",
  itemId,
  isDone
});

export const deleteItemAction = (itemId) => ({
  type: "DELETE_ITEM",
  itemId,
});
