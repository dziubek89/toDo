import React from "react";

const AddTask = props => {
  return (
    <div className="c">
      <form noValidate onSubmit={props.validate}>
        <h1>ToDo App by Dziubas</h1>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">New Task</span>
          </div>
          <textarea
            name="task"
            id="textInput"
            className="textInput"
            value={props.task}
            onChange={props.inputHandler}
            className="form-control"
            aria-label="With textarea"
          ></textarea>
        </div>
        <br />
        <div className="add-task-group">
          <div className="div-style">Priority</div>
          <div className="inp-div">
            <input
              className="inputStyle"
              type="range"
              min="0"
              max="100"
              value={props.range}
              onChange={props.sliderHandler}
            />
          </div>
          <span disabled className={props.priority}>
            {props.priority}
          </span>
        </div>
        <br />
        <input
          className="date-inp"
          name="acctualDate"
          type="date"
          min={props.date}
          max="2020-12-31"
          value={props.acctualDate}
          onChange={props.inputHandler}
        ></input>
        <br />
        <button className="btn-add-new-task">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
