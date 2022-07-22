import { SetStateAction, useState } from "react";
import { useSetRecoilState } from "recoil";
import todoListState from "./state/todo-list-state";
import { TodoItemType } from "./todo-item";

export function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList: TodoItemType[]): TodoItemType[] => [
        ...oldTodoList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false
        }
      ]
    );
    setInputValue("");
  };

  const onChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

// utility for creating unique Id
let id = 0;

function getId() {
  return id++;
}

export default TodoItemCreator;
