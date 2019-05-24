import * as React from 'react';
import { render } from 'react-dom';
import { interpolateRdYlGn } from 'd3-scale-chromatic';

import ValueInput from './ValueInput';
import { getCoordinates } from './functions';

import './styles.css';

interface AppState {
  x: number;
  y: number;
  percentage: number | '';
  isLargeArc: number|string;
  strokeColor: string|undefined;
  strokeWidth: number;
  circleBackgroundColor: string;
}

class App extends React.Component<{}, AppState> {
  private circleBackgroundDefaultColor: string;
  constructor(props: {}) {
    super(props);
    this.circleBackgroundDefaultColor = '#EFEFEF';

    this.state = {
      x: 50,
      y: 0,
      percentage: '',
      isLargeArc: 0,
      strokeColor: undefined,
      strokeWidth: 15,
      circleBackgroundColor: this.circleBackgroundDefaultColor,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.changePercentage('10');
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.changePercentage(e.currentTarget.value);
  }
  changePercentage(inputValue: string) {
    const valueAsNumber = parseInt(inputValue);
  
    let [ x, y ] = getCoordinates(valueAsNumber || 0);

    if (!isNaN(valueAsNumber) && valueAsNumber <= 100 || inputValue === '') {
      this.setState({
        percentage: valueAsNumber ? valueAsNumber : '',
        x,
        y,
        isLargeArc: valueAsNumber && valueAsNumber > 50 ? '1': '0',
        strokeColor: interpolateRdYlGn(valueAsNumber ? valueAsNumber / 100 : 0),
        circleBackgroundColor: valueAsNumber && valueAsNumber === 100 ?
          'rgb(3, 109, 57)': this.circleBackgroundDefaultColor,
      });
    }
  }
  render() {
    const { isLargeArc, x, y, strokeColor, strokeWidth, percentage, circleBackgroundColor } = this.state;
    return (
      <div className="container">
        <h1>Progress tracker</h1>
        <ValueInput handleChange={this.handleChange} percentage={percentage} />
        <svg className="progress-tracker" viewBox="0 0 100 100">
          <g>
            <circle
              cx="50"
              cy="50"
              r={50}
              fill="transparent"
              stroke={circleBackgroundColor}
              strokeWidth={`${strokeWidth}`}
            />
            <path
              d={`M 50 0 A 50 50 0 ${isLargeArc} 1 ${x} ${y}`}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
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
