import React from "react";

const Task = ({ task: { title, description } }) => {
  return (
    <div className="task">
      <div className="task-header">
        <h3>{title}</h3>
      </div>
      <hr />
      <div className="task-body">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Task;
