import React from "react";
import { tsPropertySignature } from "@babel/types";

function Reset(props) {
  return (
    <div>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
}

export default Reset;
