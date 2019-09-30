import React from "react";
import "./style/TaskList.css";

const TaskList = props => {
  const divClass = "task";

  const tasks = props.tasks.map(task => (
    <div className={divClass + task.priority} key={task.id}>
      <h5 className="stylingH">Task: {task.body}</h5>
      <p className="stylingP">Finish till: {task.date}</p>

      <button
        className="btn btn-danger"
        onClick={() => props.deleteButton(task.id)}
      >
        X
      </button>
      <button
        onClick={() => props.finishTask(task.id)}
        className="btn btn-success"
      >
        Its done
      </button>
    </div>
  ));
  return <section>{tasks}</section>;
};

export default TaskList;
