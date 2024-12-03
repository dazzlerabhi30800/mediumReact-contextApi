import React from "react";
import { useStoreContext } from "../context/store";

const SecondComp = () => {
  const {text} = useStoreContext();
  return <div>{text}</div>;
};

export default SecondComp;
