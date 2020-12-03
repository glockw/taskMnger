/* eslint-disable func-names */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createTask, editTask, fetchTasks } from "./actions";
import "./App.css";
import TasksPage from "./components/TaskPage";
import Modal from "./shared/modal";

function mapStateToProps(state) {
  const {isLoading, tasks} = state.tasks
  return {
   isLoading, 
   tasks
  };
}
const App = function ({ isLoading ,tasks, dispatch }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);
  const onUpdateTask = (task) => {
    const { id, ...params } = task;
    dispatch(editTask(id, params));
  };
  const onCreateTask = ({ title, description }) => {
    dispatch(createTask({ title, description }));
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="main-content">

{isLoading && (<div className="loading">
  Loading...
</div>)}
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
