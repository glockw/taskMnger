import * as api from "../api";
let _id = 0;
export function uniqueId() {
  return _id++;
}

// export const createTask = ({ title, description }) => {
//   return {
//     type: "CREATE_TASK",
//     payload: {
//       id: uniqueId(),
//       title,
//       description,
//       status: "Unstarted",
//     },
//   };
// };

export const updateTask = ({ id, status }) => {
  return {
    type: "UPDATE_TASK",
    payload: {
      id,
      status,
    },
  };
};

export function fetchTasksSucceeded(tasks) {
  return {
    type: "FETCH_TASKS_SUCCEEDED",
    payload: {
      tasks,
    },
  };
}

export function fetchTasks() {
  return (dispatch) => {
    api.fetchTasks().then((resp) => {
      dispatch(fetchTasksSucceeded(resp.data));
    });
  };
}

function createTaskSucceeded(task) {
  return {
    type: "CREATE_TASK_SUCCEEDED",
    payload: {
      task,
    },
  };
}

export function createTask({ title, description, status = "Unstarted" }) {
  return (dispatch) => {
    api.createTask({ title, description, status }).then((resp) => {
      dispatch(createTaskSucceeded(resp.data));
    });
  };
}

export function editTaskSucceeded(task) {
  return {
    type: "EDIT_TASK_SUCCEEDED",
    payload: {
      task,
    },
  };
}
export function editTask(id, params) {
  return (dispatch, getstate) => {
    const task = getstate().tasks.find((task) => task.id == id);
    const updatedTask = Object.assign({}, task, params);
    api.editTask(id, updatedTask).then((resp) => {
      dispatch(editTaskSucceeded(resp.data));
    });
  };
}
