import React, { useMemo, useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import moment from 'moment';
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
  Error,
  Input,
  WrapperActions,
  SaveButton,
  CancelButton,
  BackButton
} from './styles'

export default function SaveTask() {
  const [{ tasks }, dispatch] = useTaskState();
  const { id } = useParams();
  const currentTask = tasks.find(t => t.id === id);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState(null);

  const titleForm = useMemo(() => id ? 'Editar Tarefa' : 'Cadastrar Tarefa', [id]);

  useEffect(() => {
    if(id) {
      setTitle(currentTask?.title);
      setDescription(currentTask?.description);
    }
  }, [id, currentTask]);

  /**
   * Function para voltar para listagem
   */
  function handleGoBack() {
    history.replace('/');
  }

  /**
   * Function para salvar a tarefa na listagem
   */
  async function handleSaveTask() {
    if(!title) await setErrors(e => ({ ...e, title: 'Você precisa preencher o título' }));
    if(!description) await setErrors(e => ({ ...e, description: 'Você precisa preencher a descrição' }));

    if(!title || !description) return;

    if(id) {
      dispatch(saveTask({
        ...currentTask,
        title,
        description,
        done: false,
      }));
    } else {
      dispatch(saveTask({
        id: uuid(),
        title,
        description,
        date: moment(),
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
          Título da tarefa
          <Input
            error={errors?.title}
            placeholder={"Digite um título para sua tarefa"}
            value={title}
            onChange={e => {
              setTitle(e?.target?.value);
              setErrors(e => ({ ...e, title: undefined }));
            }}
          />
          {errors?.title && <Error>{errors?.title}</Error>}
        </Label>
        <Label>
          Descrição da tarefa
          <Input
            error={errors?.description}
            placeholder={"Digite uma descrição para sua tarefa"}
            value={description}
            onChange={e => {
              setDescription(e?.target?.value);
              setErrors(e => ({ ...e, description: undefined }));
            }}
            rows={4}
            as={"textarea"}
          />
          {errors?.description && <Error>{errors?.description}</Error>}
        </Label>
      </Form>
      <WrapperActions>
        <CancelButton onClick={handleGoBack}>Cancelar</CancelButton>
        <SaveButton onClick={handleSaveTask}>Salvar Tarefa</SaveButton>
      </WrapperActions>
    </>
  )
}
