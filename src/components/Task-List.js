import React from "react";
import Task from "./Task";

const TaskList = ({ status, tasks, onUpdateTask }) => {
  return (
    <div className="task-list">
      <div className="task-list-title">
        <strong>{status}</strong>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onUpdateTask={onUpdateTask} />
      ))}
    </div>
  );
};

export default TaskList;
