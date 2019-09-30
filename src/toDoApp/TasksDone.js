import React from "react";
import "./style/TasksDone.css";

const TasksDone = props => {
  const divClass = "taskDone";
  const tasksdone = props.tasksDone.map(task => (
    <div key={task.id} className="input-group mb-3">
      <div className={divClass} key={task.id}>
        <h5 className="stylingH">You have done this task: {props.date}</h5>
        <p className="stylingP">{task.body}</p>
      </div>
      <div className="input-group-append">
        <button
          className="btn btn-dark"
          //   class="btn btn-outline-secondary"
          type="button"
          onClick={() => props.deleteDoneTask(task.id)}
        >
          X
        </button>
      </div>
    </div>
  ));
  return <div>{tasksdone}</div>;
};

export default TasksDone;
