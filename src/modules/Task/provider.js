import React, { createContext, useContext, useReducer } from "react";

// Cria o context das tarefas
export const TaskContext = createContext();

// Cria o provider
export const TaskProvider = ({ reducer, initialState, children }) => (
  <TaskContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </TaskContext.Provider>
);

// Hook para exportar o context de tarefas
export const useTaskState = () => useContext(TaskContext);
