/* eslint-disable react/prop-types */
import { Children } from "react";

const EachUtils = ({ of, render }) => {
  if (of.length == 0) {
    return null;
  }
  if (typeof render !== "function") {
    console.error("render must be a function");
    return null;
  }
  return Children.toArray(of.map((item, index) => render(item, index)));
};

export default EachUtils;
