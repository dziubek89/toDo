import React, { Component } from "react";
import TaskList from "./TaskList";
import "./AddTask.css";

class AddTask extends Component {
  date = new Date().toISOString().slice(0, 10);
  counter = 1;
  state = {
    tasks: [],
    range: 0,
    priority: "low",
    acctualDate: "",
    task: ""
  };

  sliderHandler = e => {
    if (e.target.value <= 33) {
      this.setState({
        range: e.target.value,
        priority: "low"
      });
    } else if (e.target.value > 33 && e.target.value <= 66) {
      this.setState({
        range: e.target.value,
        priority: "medium"
      });
    } else if (e.target.value > 66) {
      this.setState({
        range: e.target.value,
        priority: "important",
        date: ""
      });
    }
  };

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = e => {
    e.preventDefault();
    let tasks = this.state.tasks;
    const task = {
      id: this.counter,
      body: this.state.task,
      priority: this.state.priority,
      date: this.state.date
    };
    tasks = tasks.concat(task);
    this.setState({
      tasks
    });
    this.counter++;
  };

  render() {
    const { tasks, range, priority, acctualDate, task } = this.state;
    console.log(tasks);
    return (
      <div className="container">
        <header>
          <form noValidate onSubmit={this.validate}>
            <h3>New Task</h3>
            <textarea
              name="task"
              id="textInput"
              className="textInput"
              value={task}
              onChange={this.inputHandler}
            ></textarea>
            <br />
            <label htmlFor="check">Priority</label>
            <input
              type="range"
              min="0"
              max="100"
              value={range}
              onChange={this.sliderHandler}
            />
            <button disabled className={priority}>
              {priority}
            </button>
            <br />
            <input
              name="acctualDate"
              type="date"
              min={this.date}
              max="2020-12-31"
              value={acctualDate}
              onChange={this.inputHandler}
            ></input>
            <br />
            <button>Add Task</button>
          </form>
        </header>
        <hr />
        <hr />
        <section>
          <TaskList tasks={tasks} />
        </section>
      </div>
    );
  }
}

export default AddTask;
