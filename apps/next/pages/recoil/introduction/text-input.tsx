import { useRecoilState } from "recoil";
import { textState } from "./state/text-state";

export function TextInput() {
  const [text, setText] = useRecoilState(textState);

  function onChange(event: { target: { value: string | ((currVal: string) => string); }; }) {
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

export default TextInput;
