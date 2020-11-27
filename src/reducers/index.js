import { uniqueId } from "../actions";

export default function tasks(state = { tasks: [] }, action) {
  switch (action.type) {
    case "FETCH_TASKS_SUCCEEDED":
      return { ...state, tasks: [...action.payload.tasks] };
    case "EDIT_TASK_SUCCEEDED":
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload.task.id ? action.payload.task : task
        ),
      };

    case "CREATE_TASK_SUCCEEDED":
      return { tasks: state.tasks.concat(action.payload.task) };
    case "CREATE_TASK":
      return { tasks: state.tasks.concat(action.payload) };
    case "UPDATE_TASK":
      const { id, status } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      return {
        tasks: [
          ...state.tasks.filter((t) => t.id !== id),
          { ...task, status: status },
        ],
      };
    default:
      return state;
  }
}
