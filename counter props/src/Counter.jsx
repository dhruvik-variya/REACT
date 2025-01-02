import React, { Component } from 'react';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    const increment = () => {
      this.setState({ count: this.state.count + 1 });
    };

    const decrement = () => {
      this.setState({ count: this.state.count - 1 });
    };

    return (
      <div className="container text-center mt-5">
        <div className="card p-4 shadow-lg w-25 mx-auto">
          <h2 className="mb-4">Counter</h2>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-danger btn-sm" onClick={decrement}>
              -
            </button>
            <h1 className="mx-4">{this.state.count}</h1>
            <button className="btn btn-success btn-sm" onClick={increment}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}
