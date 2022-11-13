import {
  Dialog,
  DialogTitle,
  DialogContent,
  Input,
  TextareaAutosize,
  Button,
  Box,
  DialogActions,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { TodoList, TodoTags } from '../types/types';
import { useAppContainer } from './Context';
import FlagIcon from '@mui/icons-material/Flag';
import TodoTagManage from './TodoTagManage';

type Props = {
  list: TodoList;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  todoTags: TodoTags;
};

const EditTodoDialog = ({ list, open, setOpen, todoTags }: Props) => {
  const { onEditTitle, onEditTodo, onPriorityChange, onAddTodoTag } =
    useAppContainer();
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoText, setNewTodoText] = useState('');
  const [isEditingTodo, setIsEditingTodo] = useState<boolean>(false);
  const [priority, setPriority] = useState('');

  // const [open, setOpen] = React.useState(false);

  const handlePriorityChange = (event: any) => {
    onPriorityChange(list.id, Number(event.target.id));
  };

  //Todo

  const handleEditTitle = (e: string) => {
    setNewTodoTitle(e);
  };

  const handleEditTodoText = (e: string) => {
    setNewTodoText(e);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={false}
        maxWidth={'lg'}
      >
        <DialogTitle>Edit Todo</DialogTitle>
        {/* editing todo title and todo text */}
        <DialogContent sx={{ textAlign: 'center' }}>
          <h4 style={{ margin: '15px 0' }}>
            Set New List Name and Todo Describtion
          </h4>
          <Input
            placeholder={`${list.title}`}
            value={newTodoTitle}
            onChange={e => handleEditTitle(e.target.value)}
          />{' '}
          <br />
          <TextareaAutosize
            minRows={3}
            style={{ width: 200, marginTop: '15px' }}
            placeholder={`${list.todo}`}
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
              setIsEditingTodo(false);
              setOpen(false);
            }}
          >
            Save Changes
          </Button>
          <hr />
          {/* setting priority */}
          <Box sx={{ margin: 1 }}>
            <Typography variant='body2' color='initial'>
              Choose Priority
            </Typography>
            <label>
              <FlagIcon
                color='error'
                className={
                  list.priority === 1 ? 'priorBtn priorBtnActive' : 'priorBtn'
                }
              />
              <input
                type='submit'
                style={{ display: 'none' }}
                id='1'
                onClick={handlePriorityChange}
              />
            </label>
            <label>
              <FlagIcon
                color='secondary'
                className={
                  list.priority === 2 ? 'priorBtn priorBtnActive' : 'priorBtn'
                }
              />
              <input
                type='submit'
                style={{ display: 'none' }}
                id='2'
                onClick={handlePriorityChange}
                placeholder={`${(<FlagIcon />)}`}
              />
            </label>
            <label>
              <FlagIcon
                color='info'
                className={
                  list.priority === 3 ? 'priorBtn priorBtnActive' : 'priorBtn'
                }
              />
              <input
                type='submit'
                style={{ display: 'none' }}
                id='3'
                onClick={handlePriorityChange}
                placeholder={`${(<FlagIcon />)}`}
              />
            </label>
            <label>
              <FlagIcon
                color='action'
                className={
                  list.priority === 4 ? 'priorBtn priorBtnActive' : 'priorBtn'
                }
              />
              <input
                type='button'
                data-value={10}
                id='4'
                style={{ display: 'none' }}
                onClick={handlePriorityChange}
                placeholder={`${(<FlagIcon />)}`}
              />
            </label>
          </Box>
          <hr />
          <TodoTagManage todoTags={todoTags} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default EditTodoDialog;
