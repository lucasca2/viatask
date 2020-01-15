import React, { useMemo, useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import { MdArrowBack } from "react-icons/md";
import { useParams } from 'react-router-dom';

// Services
import history from "services/history";

// Modules
import { useTaskState } from "modules/Task/provider";
import { saveTask } from "modules/Task";

// Styles
import {
  Title,
  Form,
  Label,
  Input,
  WrapperActions,
  SaveButton,
  CancelButton,
  BackButton
} from './styles'

export default function SaveTask() {
  const [{ tasks }, dispatch] = useTaskState();

  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const titleForm = useMemo(() => id ? 'Editar Tarefa' : 'Cadastrar Tarefa', [id]);

  useEffect(() => {
    if(id) {
      const currentTask = tasks.find(t => t.id === id);

      console.log(currentTask);

      setTitle(currentTask?.title);
      setDescription(currentTask?.description);
    }
  }, [id]);

  /**
   * Function para voltar para listagem
   */
  function handleGoBack() {
    history.replace('/');
  }

  /**
   * Function para salvar a tarefa na listagem
   */
  function handleSaveTask() {
    if(id) {
      dispatch(saveTask({
        id,
        title,
        description,
        date: '15/01/2020',
        done: false,
      }));
    } else {
      dispatch(saveTask({
        id: uuid(),
        title,
        description,
        date: '15/01/2020',
        done: false,
      }));
    }


    handleGoBack();
  }

  return (
    <>
      <BackButton onClick={handleGoBack}><MdArrowBack />Voltar para listagem</BackButton>
      <Title color={"text"}>{titleForm}</Title>
      <Form>
        <Label>
          título da tarefa
          <Input
            placeholder={"Digite um título para sua tarefa"}
            value={title}
            onChange={e => setTitle(e?.target?.value)}
          />
        </Label>
        <Label>
          descrição da tarefa
          <Input
            placeholder={"Digite uma descrição para sua tarefa"}
            value={description}
            onChange={e => setDescription(e?.target?.value)}
            rows={4}
            as={"textarea"}
          />
        </Label>
      </Form>
      <WrapperActions>
        <CancelButton onClick={handleGoBack}>Cancelar</CancelButton>
        <SaveButton onClick={handleSaveTask}>Salvar Tarefa</SaveButton>
      </WrapperActions>
    </>
  )
}
