import * as React from "react";
import { render } from "react-dom";
import { getXCoordinate, getYCoordinate } from "./functions";

import "./styles.css";

interface AppState {
  x: number;
  y: number;
  isLargeArc: number;
  strokeColor: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 50,
      isLargeArc: 1,
      strokeColor: "#54D816"
    };
  }
  changePercentage() {}
  render() {
    const { isLargeArc, x, y, strokeColor } = this.state;
    return (
      <div className="container">
        <h1>Progress tracker</h1>

        <svg className="progress-tracker" viewBox="0 0 100 100">
          <g>
            <path
              d={`M 50 0 A 50 50 0 ${isLargeArc} 1 ${x} ${y}`}
              stroke={strokeColor}
              strokeWidth={15}
              fill="transparent"
            />
          </g>
        </svg>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
