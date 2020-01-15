export const initialValues = {
  tasks: JSON.parse(localStorage.getItem('@tasks')) || [],
};

export const refreshStorage = (tasks) => {
  localStorage.setItem('@tasks', JSON.stringify(tasks));
};

export const Types = {
  SAVE: "SAVE_TASK",
  REMOVE: "REMOVE_TASK"
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Types.SAVE: {
      const newTasks = [  action.task, ...state.tasks.filter(t => t.id !== action.task.id) ];

      refreshStorage(newTasks);

      return {
        ...state,
        tasks: newTasks,
      };
    }
    case Types.REMOVE: {
      const newTasks = [ ...state.tasks.filter(t => t.id !== action.task.id) ];

      refreshStorage(newTasks);

      return {
        ...state,
        tasks: newTasks,
      };
    }
    default:
      return state;
  }
};

export const Actions = {
  save: ({ task }) => ({ type: Types.SAVE, task }),
  remove: ({ task }) => ({ type: Types.REMOVE, task }),
};

export const saveTask = (task) => {
  return Actions.save({ task });
};

export const removeTask = (task) => {
  return Actions.remove({ task });
};
