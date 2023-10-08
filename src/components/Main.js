import React, { Component } from 'react';
import './Main.css';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa'


export default class Main extends Component {
  state = {
    tarefa: '',
    tarefas: [
      'Fazer Café',
      'Beber água'
    ]
  };

  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value,
    });
  }

  render() {
    const { novaTarefa, tarefas} = this.state;
    return(
      <div className='main'>
        <h1>To Do List</h1>

        <form action='#' onSubmit={this.handleSubmit} className='form'>

          <input
           type='text'
           onChange={this.handleChange}
           value={novaTarefa}
           />

          <button type='submit'>
            <FaPlus />
          </button>
        </form>

        <ul className='tarefas'>
            {tarefas.map((tarefa) => (
              <li key={tarefa}>
                {tarefa}
                <div>
                  <FaEdit className='edit'/>
                  <FaWindowClose className='del'/>
                </div>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}
