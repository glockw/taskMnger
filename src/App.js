import React, { useState } from "react";
import TasksPage from "./components/TaskPage";
import Modal from "./shared/modal";
import "./App.css";
const mockTasks = [
  {
    id: 1,
    title: "Learn Redux",
    description: "The store, actions, and reducers, oh my!",
    status: "Unstarted",
  },
  {
    id: 2,
    title: "Peace on Earth",
    description: "No big deal.",
    status: "In Progress",
  },

  {
    id: 6,
    title: "Peace on Earth",
    description: "No big deal.",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Learn Redux",
    description: "The store, actions, and reducers, oh my!",
    status: "Completed",
  },
];

const App = function () {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="main-content">
      {showModal && <Modal />}
      <div className="add-task">
        <button onClick={()=> setShowModal(prev => !prev)}> TASK + </button>
      </div>
      <TasksPage tasks={mockTasks} />
    </div>
  );
};

export default App;
