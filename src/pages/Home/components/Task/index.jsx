import React from 'react';
import { Link } from 'react-router-dom';
import { MdDone, MdClose, MdEdit, MdDelete } from "react-icons/md";

// Styles
import {
  Wrapper,
  Content,
  Actions,
  Tooltip,
  ActionButton,
  Title,
  Description,
  Date,
  Label
} from './styles';

export default function Task({
  task,
  bordered,
  handleClickDone,
  handleRemoveTask
}) {
  return (
    <Wrapper bordered={bordered}>
      <Content>
        <Date>{task?.date}</Date>
        <Title>{task?.title}</Title>
        {task?.done ? (
          <Label color={"success"}>Concluído</Label>
        ) : (
          <Label color={"danger"}>A Fazer</Label>
        )}
      </Content>
      <Actions>
        <Tooltip data-tooltip={"Remover esta tarefa"} data-position={"top"}>
          <ActionButton onClick={handleRemoveTask} backgroundColor={"danger"}>
            <MdDelete />
          </ActionButton>
        </Tooltip>
        {!task?.done && (
          <Link to={`/task/${task?.id}`} data-tooltip={"Editar esta tarefa"} data-position={"top"}>
            <ActionButton backgroundColor={"secondary"}>
              <MdEdit />
            </ActionButton>
          </Link>
        )}
        {task?.done ? (
          <Tooltip data-tooltip={"Marcar como a fazer"} data-position={"top"}>
            <ActionButton onClick={handleClickDone} backgroundColor={"danger"}>
              <MdClose />
            </ActionButton>
          </Tooltip>
        ) : (
          <Tooltip data-tooltip={"Marcar como concluído"} data-position={"top"}>
            <ActionButton onClick={handleClickDone} backgroundColor={"primary"}>
              <MdDone />
            </ActionButton>
          </Tooltip>
        )}
      </Actions>
      <Description>{task?.description}</Description>
    </Wrapper>
  )
}
