/* eslint-disable func-names */
import React, { useState } from "react";
import { connect } from "react-redux";
import TasksPage from "./components/TaskPage";
import Modal from "./shared/modal";
import "./App.css";
import { createTask, updateTask } from "./actions";

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}
const App = function ({ tasks, dispatch }) {
  const [showModal, setShowModal] = useState(false);

  const onUpdateTask = ({ id, status }) =>
    dispatch(updateTask({id, status}));
  const onCreateTask = ({ title, description }) => {
    dispatch(createTask({ title, description }));
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="main-content">
      {showModal && <Modal />}
      <div className="add-task">
        <button type="button" onClick={() => setShowModal((prev) => !prev)}>
          {" "}
          TASK +{" "}
        </button>
      </div>
      <TasksPage
        tasks={tasks}
        onUpdateTask={onUpdateTask}
        onCreateTask={onCreateTask}
      />
    </div>
  );
};

// eslint-disable-next-line no-undef
export default connect(mapStateToProps)(App);
