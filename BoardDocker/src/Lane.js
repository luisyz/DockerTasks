import React, { Component } from 'react';
import './App.css';

class Lane extends Component {

  render() {
    return (
      <div className="Lane flex-grow-1">
      {this.props.tasks.map(task => <div> Tarea con ID {task.id}</div>)}
      </div>

    )
  }
}

export default Lane;
