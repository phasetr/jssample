import { atom } from "recoil";
import { TodoItemType } from "./todo-item";

const emptyArray: TodoItemType[] = [];
export const todoListState = atom({
  key: 'TodoList',
  default: emptyArray,
});
export default todoListState;
