export const initialValues = {
  tasks: [
    { id: '1', title: 'Layout', description: 'Criar layout do sistema de teste', date: '15/01/2020', done: false },
    { id: '2', title: 'Código do sistema', description: 'Criar layout do sistema de teste', date: '15/01/2020', done: false },
    { id: '3', title: 'Tarefa com descrição bem grande', description: 'Criar layout do sistema de teste, Criar layout do sistema de teste, Criar layout do sistema de teste, Criar layout do sistema de teste, Criar layout do sistema de teste, Criar layout do sistema de teste', date: '15/01/2020', done: false },
  ],
};

export const Types = {
  SAVE: "SAVE_TASK",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Types.SAVE:
      return {
        ...state,
        tasks: [ ...state.tasks.filter(t => t.id !== action.task.id), action.task ],
      };
    default:
      return state;
  }
};

export const Actions = {
  save: ({ task }) => ({ type: Types.SAVE, task }),
};

export const saveTask = (task) => {
  return Actions.save({ task });
};

// export const ActionModals = {
//   openModalWebsiteLocked: ({ days }) =>
//     Actions.open({
//       modal: "ModalWebsiteLocked",
//       props: { days }
//     }),
//   openModalWebsiteUnlocked: ({ dateEnd, urlSite }) =>
//     Actions.open({
//       modal: "ModalWebsiteLocked",
//       props: { dateEnd, urlSite }
//     })
// };
