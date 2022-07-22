import { useRecoilValue } from "recoil";
import charCountState from "./char-count-state";

export function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
export default CharacterCount;
