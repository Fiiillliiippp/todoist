import { Input, TextareaAutosize, Button } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { TodayTodo } from "../../../types/types";
import { useAppContainer } from "../../Context";

type Props = {
  list: TodayTodo;
};


const EditingTodoItem = ({ list }: Props) => {
  const { onEditTitle, onEditTodo } =
  useAppContainer();
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoText, setNewTodoText] = useState('');


  const handleEditTitle = (e: string) => {
    setNewTodoTitle(e);
  };

  const handleEditTodoText = (e: string) => {
    setNewTodoText(e);
  };


  return (
    <div>
        <h4 style={{ margin: '15px 0' }}>
            Set New List Name and Todo Describtion
          </h4>
          <Input
            placeholder={list.title}
            value={newTodoTitle}
            onChange={e => handleEditTitle(e.target.value)}
          />{' '}
          <br />
          <TextareaAutosize
            minRows={3}
            style={{ width: 200, marginTop: '15px' }}
            placeholder={list.todo}
            value={newTodoText}
            onChange={e => handleEditTodoText(e.target.value)}
          />{' '}
          <br />
          <Button
            variant='text'
            onClick={() => {
              onEditTitle(list.id, newTodoTitle);
              onEditTodo(list.id, newTodoText);
              setNewTodoTitle('');
            }}
          >
            Save Changes
          </Button>
      </div>
  )
}
export default EditingTodoItem