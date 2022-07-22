import { selector } from "recoil";
import todoListFilterState from "./todo-list-filter-state";
import todoListState from "./todo-list-state";
import { TodoItemType } from "./todo-item";

export const filteredTodoListState = selector({
  key: 'FilteredTodoList',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item: TodoItemType) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item: TodoItemType) => !item.isComplete);
      default:
        return list;
    }
  },
});
export default filteredTodoListState;
