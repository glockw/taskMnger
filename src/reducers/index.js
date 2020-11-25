import { uniqueId } from "../actions";

const mockTasks = [
  {
    id: uniqueId(),
    title: "Learn Redux",
    description: "The store, actions, and reducers, oh my!",
    status: "Unstarted",
  },
  {
    id: uniqueId(),
    title: "Peace on Earth",
    description: "No big deal.",
    status: "In Progress",
  },
];

export default function tasks(state = { tasks: mockTasks }, action) {
  switch (action.type) {
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
