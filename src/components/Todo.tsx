import { Box, Checkbox, Grid, Input, TextareaAutosize } from '@mui/material';
import { display } from '@mui/system';
import { render } from '@testing-library/react';
import { useState } from 'react';
import { TodoList } from '../types/types';
import { useAppContainer } from './Context';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from '@mui/material';
import React from 'react';

type Props = {
  list: TodoList;
};

const Todo = ({ list }: Props) => {
  const { lists, onEditTitle, onEditTodo, onTodoDone } = useAppContainer();
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoText, setNewTodoText] = useState('');
  const [isEditingTodo, setIsEditingTodo] = useState<boolean>(false);
  const [isMouseIn, setIsMouseIn] = useState<boolean>(false);
  const [todoIsChecked, setTodoIsChecked] = useState<boolean>(true);

  // ! MUI
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Todo

  const handleEditTitle = (e: string) => {
    setNewTodoTitle(e);
  };

  const handleEditTodoText = (e: string) => {
    setNewTodoText(e);
  };

  const handleTodoDone = () => {
    setTodoIsChecked(!todoIsChecked);
    onTodoDone(list.id, todoIsChecked);
  };

  if (isEditingTodo) {
    return (
      <div>
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
          }}
        >
          Edit todo
        </Button>
        <Button variant='text' onClick={() => setIsEditingTodo(false)}>
          Calcel
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Box
        sx={{
          background: '#f5f5f5',
          maxWidth: 650,
          margin: 'auto',
          border: '1px solid gray',
          borderRadius: 2,
          textAlign: 'left',
          paddingX: 2,
          paddingY: 1,
          marginY: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onMouseEnter={() => setIsMouseIn(true)}
        onMouseLeave={() => setIsMouseIn(false)}
      >
        <div
          style={{
            maxWidth: '90%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>
            <Checkbox size='small' onChange={handleTodoDone} />
          </div>
          <div>
            <h2 style={{ margin: '0px', marginTop: '5px' }}>{list.title}</h2>
            <p style={{ margin: '0px', marginTop: '5px' }}>{list.todo}</p>
          </div>
        </div>
        <div className={isMouseIn ? 'editTools' : 'editToolsDisabeled'}>
          {/* Edit */}
          <Button variant='text' onClick={() => setIsEditingTodo(true)}>
            <ModeEditIcon color='action' />
          </Button>
          {/* more */}
          <Button variant='text' onClick={handleClickOpen}>
            <MoreHorizIcon />
          </Button>
          <Dialog open={open} onClose={handleClose} fullWidth={false}
        maxWidth={"lg"}>
            <DialogTitle>Edit Todo</DialogTitle>
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
                }}
              >
                Edit todo
              </Button>
              <Button variant='text' onClick={() => setIsEditingTodo(false)}>
                Calcel
              </Button>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </div>
      </Box>
    </div>
  );
};
export default Todo;
