import TodoList from "./todo-list";
import { RecoilRoot } from "recoil";

export function Index() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default Index;
