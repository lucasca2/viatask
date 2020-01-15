import React, { useMemo } from 'react';
import moment from "moment";
import { MdDone, MdClose } from "react-icons/md";

// Components
import Task from './components/Task';

// Modules
import { useTaskState } from "modules/Task/provider";
import { saveTask, removeTask } from "modules/Task";

// Services
import history from "services/history";

// Styles
import {
  Title,
  WrapperInfo,
  WrapperContentInfo,
  Info,
  AddButton
} from './styles'


/**
 * Function para ordenar as tarefas por data
 * @param a
 * @param b
 * @returns {number}
 */
export const sortByDate = (a, b) => {
  console.log(a, b);
  if(moment(a.date) > moment(b.date)) return -1;
  if(moment(a.date) < moment(b.date)) return 1;

  return 0;
};

export default function Home() {
  const [{ tasks }, dispatch] = useTaskState();

  const sortedTasks = tasks.sort(sortByDate);

  const tasksTodo = useMemo(() => sortedTasks?.filter(t => !t.done), [sortedTasks]);
  const tasksDoned = useMemo(() => sortedTasks?.filter(t => t.done), [sortedTasks]);

  /**
   * Function para definir tarefa como concluída/a fazer
   * @param task
   */
  function handleClickDone(task) {
    task.done = !task?.done;
    dispatch(saveTask(task));
  }

  /**
   * Function para remover a tarefa da listagem
   * @param task
   */
  function handleRemoveTask(task) {
    dispatch(removeTask(task));
  }

  /**
   * Function para adicionar uma nova tarefa na listagem
   * @param task
   */
  function handleAddTask() {
    history.push('/task')
  }

  return (
    <>
      <WrapperInfo>
        <WrapperContentInfo>
          <Title color={"text"}>Lista de tarefas ({tasks.length})</Title>
          <Info color={"success"}> <MdDone /> {tasksDoned.length} Tarefas concluídas</Info>
          <Info color={"danger"}> <MdClose /> {tasksTodo.length} Tarefas a fazer</Info>
        </WrapperContentInfo>
        <AddButton onClick={handleAddTask}>Adicionar nova tarefa</AddButton>
      </WrapperInfo>

      {tasksTodo?.length > 0 && <Title color={"danger"}>Tarefas A Fazer</Title>}
      {tasksTodo?.map((task, index) => (
        <Task
          key={task?.id}
          bordered={index !== 0}
          task={task}
          handleClickDone={() => handleClickDone(task)}
          handleRemoveTask={() => handleRemoveTask(task)}
        />
      ))}
      {tasksDoned?.length > 0 && <Title color={"success"}>Tarefas Concluídas</Title>}
      {tasksDoned?.map((task, index) => (
        <Task
          key={task?.id}
          bordered={index !== 0}
          task={task}
          handleClickDone={() => handleClickDone(task)}
          handleRemoveTask={() => handleRemoveTask(task)}
        />
      ))}
    </>
  )
}
