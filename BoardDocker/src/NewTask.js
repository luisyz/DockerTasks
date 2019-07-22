import React, { Component } from 'react';
import Lane from './Lane.js';
import logo from './logo.svg';
import './App.css';

class NewTask extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: "",
      description: "",
    }
  }

  submit(){
    console.log(this.state)
    fetch('http://localhost:8000/api/newTask', {
      method:'post',
      body:JSON.stringify(
        this.state
      ),
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(function(response){
      response.json().then(function(resp){
        console.log(resp)
      })
    })
  }


  render(){
  return (
    <div className="App">
    <h1>Ingrese nueva tarea </h1>
    <input type="text" placeholder="Titulo" onChange={(item)=>{this.setState({title:item.target.value})}}/>
    <input type="text" placeholder="Descripcion" onChange={(item)=>{this.setState({description:item.target.value})}}/>
      <button onClick={()=>{this.submit()}}>New Task</button>
    </div>
  );
}
}

export default NewTask;
