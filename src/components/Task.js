import React from "react";

const Task = ({ task: { title, description } }) => {
  return (
    <div className="task">
      <div className="task-header">
        <div>{title}</div> 2
      </div>
      <hr />
      <div className="task-body">{description}</div>
    </div>
  );
};

export default Task;
