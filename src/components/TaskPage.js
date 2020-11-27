import React, { useState } from "react";
import TaskList from "./Task-List";

export const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];

const TasksPage = ({ tasks, onCreateTask, onUpdateTask }) => {
  const [task, setTask] = useState({
    showNewCardFrom: false,
    title: "",
    description: "",
  });
  const renderTaskLists = () => {
    return TASK_STATUSES.map((status, index) => {
      const statusTasks = tasks.filter((task) => task.status === status);
      return (
        <TaskList
          key={status}
          status={status}
          tasks={statusTasks}
          onUpdateTask={onUpdateTask}
        />
      );
    });
  };

  const onTitleChange = (e) => {
    setTask((prev) => ({ ...prev, title: e.target.value }));
  };

  const onDescriptionChange = (e) => {
    setTask((prev) => ({ ...prev, description: e.target.value }));
  };

  const resetForm = () => {
    setTask({
      showNewCardForm: false,
      title: "",
      description: "",
    });
  };

  const createTask = (e) => {
    e.preventDefault();
    onCreateTask({
      title: task.title,
      description: task.description,
    });
    resetForm();
  };

  const toggleForm = () => {
    setTask((prev) => ({ ...prev, showNewCardForm: !task.showNewCardForm }));
  };
  return (
    <div className="tasks">
      <button type="button" onClick={toggleForm}>
        task
      </button>
      {task.showNewCardForm && (
        <form className="task-list-form" onSubmit={createTask}>
          <input
            className="full-width-input"
            onChange={onTitleChange}
            value={task.title}
            type="text"
            placeholder="title"
          />
          <input
            className="full-width-input"
            onChange={onDescriptionChange}
            value={task.description}
            type="text"
            placeholder="description"
          />
          <button className="button" type="submit">
            Save
          </button>
        </form>
      )}

      <div className="task-lists">{renderTaskLists()}</div>
    </div>
  );
};

export default TasksPage;
