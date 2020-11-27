import React from "react";

const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];
const Task = ({ task: { id, title, description, status }, onUpdateTask }) => {
  const onSelectHandle = (e) => onUpdateTask({ id, status: e.target.value });

  return (
    <div className="task">
      <div className="task-header">
        <h3>{title}</h3>
        <select name="" value={status} onChange={onSelectHandle} id="">
          {TASK_STATUSES.map((status, index) => (
            <option key={index} value={status}>{status} </option>
          ))}
        </select>
      </div>
      <hr />
      <div className="task-body">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Task;
