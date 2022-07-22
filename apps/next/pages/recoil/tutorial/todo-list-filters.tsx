import { useRecoilState } from "recoil";
import todoListFilterState from "./state/todo-list-filter-state";

export function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = (event: { target: { value: string | ((currVal: string) => string); }; }) => {
    setFilter(event.target.value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}
export default TodoListFilters;
