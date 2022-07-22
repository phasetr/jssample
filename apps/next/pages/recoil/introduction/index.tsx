import React from "react";
import { RecoilRoot } from "recoil";
import CharacterCounter from "./character-counter";

function Index() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default Index;
