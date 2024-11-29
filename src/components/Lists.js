import React, { Component } from 'react'

export class Lists extends Component {

    strings = ["Hi I am Sagar", "Hello", "Whats Up"];

  render() {
    return (
      <div>
        <ul>
            {this.strings.map((item) => <li key = {item}>{item}</li>)}
        </ul>
      </div>
    )
  }
}

export default Lists
