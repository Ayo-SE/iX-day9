import React, { Component } from 'react';

import TaskForm from './components/TaskForm';
import tasks from './components/tasks';

import TaskTable from './components/TaskTable';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Task from './components/tasks';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  // Task(task, completed, dateCompleted) {
  //   this.task = task;
  //   this.completed = completed;
  //   this.dateCompleted = dateCompleted;
  // }

  onTaskCreated(taskName) {
    const task = new Task(taskName, false, null);

    this.state.tasks.push(task);
    this.setState({
      tasks: this.state.tasks
    });
  }

  render() {
    return (
      <div>
        <div className="container mt-3">

            <div className="card card-body">

                <h1 className="text-center">Todo List</h1>

                <hr />

                <p className="text-center">Our simple TODO list</p>

                <TaskForm createTask={(taskName) => this.onTaskCreated(taskName)}/>
                <TaskTable tasks={this.state.tasks}/>
            </div>

        </div>
      </div>
    )
  }
}
