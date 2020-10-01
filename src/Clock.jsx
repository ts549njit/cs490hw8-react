/* This is example code for explanation purposes only!
It will not render anything! */
import * as React from "react";
import * as ReactDOM from "react-dom";

export class Clock extends React.Component {
  constructor(props) {
    super(props); // We need this as a derived class
    //   /* If we have a constructor,
    //   we need to be initializing something here */

    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    alert(this.props.time);
  }

  // This is a required function that should
  // say what the desired HTML should look like
  render() {
    return (
      // TODO our "HTML" goes here
      <div>
        <h1>Hello world</h1>
        <h2>It is {this.props.time}.</h2>
        <button id="time_button" onClick={this.buttonClick}>
          What Time Is It
        </button>
      </div>
    );
  }
}
