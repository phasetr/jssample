import { useRecoilValue } from "recoil";
import TodoItemCreator from "./todo-item-creator";
import TodoItem, { TodoItemType } from "./todo-item";
import filteredTodoListState from "./state/filtered-todo-list-state";
import TodoListStats from "./todo-list-stats";
import TodoListFilters from "./todo-list-filters";

export function TodoList() {
  // changed from todoListState to filteredTodoListState
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem: TodoItemType) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
}

export default TodoList;
