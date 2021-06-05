import React, { Component } from 'react'

export default class TaskTable extends Component {


    render() {
        return (
            <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Completed</th>
                      <th>Completed On</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                        {
                        this.props.tasks.map(task => 
                            <tr key={task.id}>
                                <td>{task.name}</td>
                                <td>{task.completed ? 'Yes' : 'No'}</td>
                                <td>{task.dateCompleted}</td>
                            </tr>)
                        }
                  </tbody>
                </table>
            </div>
        )
    }
}
