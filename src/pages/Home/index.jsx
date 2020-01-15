import React, { useMemo } from 'react';
import { MdDone, MdClose, MdDashboard } from "react-icons/md";

// Components
import Task from './components/Task';

// Modules
import { useTaskState } from "modules/Task/provider";
import { saveTask } from "modules/Task";

// Styles
import {
  Title,
  WrapperInfo,
  Info,
} from './styles'

export default function Home() {
  const [{ tasks }, dispatch] = useTaskState();

  const tasksTodo = useMemo(() => tasks?.filter(t => !t.done), [tasks]);
  const tasksDoned = useMemo(() => tasks?.filter(t => t.done), [tasks]);

  /**
   * Function para definir tarefa como concluída/a fazer
   * @param task
   */
  function handleClickDone(task) {
    task.done = !task?.done;
    dispatch(saveTask(task));
  }

  return (
    <>
      <WrapperInfo>
        <Title color={"text"}>Lista de tarefas ({tasks.length})</Title>
        <Info color={"success"}> <MdDone /> {tasksDoned.length} Tarefas concluídas</Info>
        <Info color={"danger"}> <MdClose /> {tasksTodo.length} Tarefas a fazer</Info>
      </WrapperInfo>

      {tasksTodo?.length > 0 && <Title color={"danger"}>Tarefas A Fazer</Title>}
      {tasksTodo?.map((task, index) => (
        <Task
          key={task?.id}
          bordered={index !== 0}
          task={task}
          handleClickDone={() => handleClickDone(task)}
        />
      ))}
      {tasksDoned?.length > 0 && <Title color={"success"}>Tarefas Concluídas</Title>}
      {tasksDoned?.map((task, index) => (
        <Task
          key={task?.id}
          bordered={index !== 0}
          task={task}
          handleClickDone={() => handleClickDone(task)}
        />
      ))}
    </>
  )
}
