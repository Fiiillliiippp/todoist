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
  const {
    onEditTitle,
    onEditTodo,
    onPriorityChange,
    onAddTodoTag,
    onAddTodo,
    listTags,
  } = useAppContainer();
  const [newTodoTitle, setNewTodoTitle] = useState(list.title);
  const [newTodoText, setNewTodoText] = useState('');
  const [isEditingTodo, setIsEditingTodo] = useState<boolean>(false);
  const [priority, setPriority] = useState('');
  const [isAddingNewTodo, setIsAddingNewTodo] = useState<boolean>(false);

  const [newTodo, setNewTodo] = useState<{ title: string; desc: string }>({
    title: '',
    desc: '',
  });

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

  const handleSaveNewTodo = () => {
    onAddTodo(list.id, newTodo);
    setNewTodo({
      title: '',
      desc: '',
    });
    setIsAddingNewTodo(false);
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
          <h4 style={{ margin: '15px 0' }}>Set New List Name and add Todos</h4>
          <Input
            placeholder={list.title}
            value={newTodoTitle}
            onChange={e => handleEditTitle(e.target.value)}
          />
          <br /> {/* //TODO no go */}
          {list.todos.length === 0 && <div>no todos yet</div>}
          {list.todos.length !== 0 && (
            <div>
              {list.todos.map(todo => (
                <div>
                  <h6>{todo.title}</h6>
                  <p>{todo.desc}</p>
                </div>
              ))}
            </div>
          )}
          {isAddingNewTodo && (
            <div>
              <Input
                placeholder='Todo title'
                value={newTodo.title}
                onChange={e =>
                  setNewTodo(prev => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
              />
              <br />
              <TextareaAutosize
                placeholder='desc'
                value={newTodo.desc}
                onChange={e =>
                  setNewTodo(prev => ({
                    ...prev,
                    desc: e.target.value,
                  }))
                }
              />
              <div>
                <Button onClick={() => setIsAddingNewTodo(false)}>
                  Cancel
                </Button>
                <Button
                  variant='contained'
                  disabled={
                    newTodo.title.length === 0 || newTodo.desc.length === 0
                  }
                  onClick={handleSaveNewTodo}
                >
                  Save
                </Button>
              </div>
            </div>
          )}
          {!isAddingNewTodo && (
            <Button variant='outlined' onClick={() => setIsAddingNewTodo(true)}>
              Add todo
            </Button>
          )}
          {/* <TextareaAutosize
            minRows={3}
            style={{ width: 200, marginTop: '15px' }}
            placeholder='string'
            value={newTodoText}
            onChange={e => handleEditTodoText(e.target.value)}
          /> */}
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
          <TodoTagManage listTags={listTags} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default EditTodoDialog;
