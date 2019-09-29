import React from "react";

const TaskList = props => {
  const tasks = props.tasks.map(task => <div key={task.id}>{task.body}</div>);
  return <div>{tasks}</div>;
};

export default TaskList;
