import * as React from "react";
import * as ReactDOM from "react-dom";

import { Clock } from "./Clock";
// TODO call render here

function renderHTML() {
  ReactDOM.render(
    <Clock time={new Date().toLocaleTimeString()} />,
    document.getElementById("content")
  );
}

window.setInterval(renderHTML, 1000);
