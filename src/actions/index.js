import { CALL_API } from "../middleware/api";

export const FETCH_TASKS_STARTED = "FETCH_TASKS_STARTED";
export const FETCH_TASKS_SUCCEEDED = "FETCH_TASKS_SUCCEEDED";
export const FETCH_TASKS_FAILED = "FETCH_TASKS_FAILED";

export function fetchTasks() {
  return {
    [CALL_API]: {
      types: [FETCH_TASKS_STARTED, FETCH_TASKS_SUCCEEDED, FETCH_TASKS_FAILED],
      endpoint: "/tasks",
    },
  };
}

export const CREATE_TASK_STARTED = "CREATE_TASK_STARTED";
export const CREATE_TASK_SUCCEEDED = "CREATE_TASK_SUCCEEDED";
export const CREATE_TASK_FAILED = "CREATE_TASK_FAILED";

export function createTask({ title, description, status = "Unstarted" }) {
  return {
    [CALL_API]: {
      types: [CREATE_TASK_STARTED, CREATE_TASK_SUCCEEDED, CREATE_TASK_FAILED],
      method: "post",
      body: { title, description, status },
      endpoint: "/tasks",
    },
  };
}

export const EDIT_TASK_STARTED = "EDIT_TASK_STARTED";
export const EDIT_TASK_SUCCEEDED = "EDIT_TASK_SUCCEEDED";
export const EDIT_TASK_FAILED = "EDIT_TASK_FAILED";

export function editTask(id, params) {
  return {
    [CALL_API]: {
      types: [EDIT_TASK_STARTED, EDIT_TASK_SUCCEEDED, EDIT_TASK_FAILED],
      method: "put",
      endpoint: `tasks/${id}`,
      body: { params },
    },
  };
}
