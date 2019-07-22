import React, { Component } from 'react';
import Lane from './Lane.js';
import NewTask from './NewTask.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentDidMount(){
      fetch('http://localhost:8000/api/tasks').then( response => response.json()).then(
        response => {
         this.setState({
           tasks: response.data.tasks
         });
        }
      );
  }


  render(){
  return (
    <div className="App">
    <h1>Hay {this.state.tasks.length } tareas </h1>
      <div className="d-flex">
      <Lane tasks={this.state.tasks.filter( task => task.status == 1)}/>
      <Lane tasks={this.state.tasks.filter( task => task.status == 2)}/>
      <Lane tasks={this.state.tasks.filter( task => task.status == 3)}/>
      </div>
      <NewTask/>
    </div>
  );
}
}

export default App;
