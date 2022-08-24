import { v4 as uuidv4 } from "uuid";

export const createNewItem = (text) => {
  return {
    id: uuidv4(),
    complete: false,
    task: text,
  };
};
