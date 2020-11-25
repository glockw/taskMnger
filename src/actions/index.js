let _id = 1;
export function uniqueId() {
  return _id++;
}

export const createTask = ({ title, description }) => {
  return {
    type: "CREATE_TASK",
    payload: {
      id: uniqueId(),
      title,
      description,
      status: "Unstarted",
    },
  };
};

export const updateTask = ({ id, status }) => {
  return {
    type: "UPDATE_TASK",
    payload: {
      id,
      status,
    },
  };
};
