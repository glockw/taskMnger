const intitialState = {
  isLoading: false,
  tasks: [],
  error: null,
};
export default function tasks(state = intitialState, action) {
  switch (action.type) {
    case "FETCH_TASKS_STARTED": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "EDIT_TASK_STARTED":
      return { ...state, isLoading: true };
    case "FETCH_TASKS_SUCCEEDED":
      return { ...state, isLoading: false, tasks: [...action.payload] };
    case "EDIT_TASK_SUCCEEDED":
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload.task.id ? action.payload.task : task
        ),
      };

    case "CREATE_TASK_SUCCEEDED":
      return { tasks: state.tasks.concat(action.payload) };
    case "CREATE_TASK":
      return { tasks: state.tasks.concat(action.payload) };
    case "EDIT_TASK_SUCCEEDED":
      return {
        ...state,
        isLoading: false,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
      };
    default:
      return state;
  }
}
