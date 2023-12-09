import React from "./react";

import { Breeds } from "./Breeds";
import { Breed } from "./Breed";

export const App = ({ path }) => {
  if (path === "/") {
    return <Breeds document={document} />;
  } else if (path === "/breed") {
    return <Breed path={path} />;
  }
};
