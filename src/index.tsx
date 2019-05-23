import * as React from "react";
import { render } from "react-dom";
import ValueInput from "./ValueInput";
import { getCoordinates } from "./functions";

import "./styles.css";

interface AppState {
  x: number;
  y: number;
  percentage: number | '';
  isLargeArc: number|string;
  strokeColor: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      x: 50,
      y: 0,
      percentage: '',
      isLargeArc: 0,
      strokeColor: "#54D816"
    };

    this.changePercentage = this.changePercentage.bind(this);
  }
  changePercentage(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    const valueAsNumber = parseInt(e.currentTarget.value);

    let [ x, y ] = getCoordinates(valueAsNumber || 0);

    if (!isNaN(valueAsNumber) && valueAsNumber <= 100 || value === '') {
      this.setState({
        percentage: valueAsNumber ? valueAsNumber : '',
        x,
        y,
        isLargeArc: valueAsNumber && valueAsNumber > 50 ? '1': '0',
      });
    }
  }
  render() {
    const { isLargeArc, x, y, strokeColor, percentage } = this.state;
    return (
      <div className="container">
        <h1>Progress tracker</h1>
        <ValueInput changePercentage={this.changePercentage} percentage={percentage} />
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
