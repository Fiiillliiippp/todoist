import { Box, Button, Checkbox, Grid, Input, TextareaAutosize } from '@mui/material';
import { display } from '@mui/system';
import { render } from '@testing-library/react';
import { useState } from 'react';
import { TodoList } from '../types/types';
import { useAppContainer } from './Context';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

type Props = {
  list: TodoList;
};

const Todo = ({ list }: Props) => {
  const { lists, onEditTitle, onTodoDone } = useAppContainer();
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoText, setNewTodoText] = useState('');
  const [isEditingTodo, setIsEditingTodo] = useState<boolean>(false);
  const [isMouseIn, setIsMouseIn] = useState<boolean>(false);
  const [todoIsChecked, setTodoIsChecked] = useState<boolean>(true);

  const handleEditTitle = (e: string) => {
    setNewTodoTitle(e);
  };

  const handleEditTodoText = (e: string) => {
    setNewTodoText(e);
  };

  const handleTodoDone = () => {
    setTodoIsChecked(!todoIsChecked)
    onTodoDone(list.id, todoIsChecked)
  }

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
          placeholder={`${list.todos}`}
          value={newTodoText}
          onChange={e => handleEditTodoText(e.target.value)}
        />{' '}
        <br />
        <Button
          variant='text'
          onClick={() => {
            onEditTitle(list.id, newTodoTitle, newTodoText);
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
            <Checkbox size="small" onChange={handleTodoDone} />
          </div>
          <div>
            <h2 style={{ margin: '0px', marginTop: '5px' }}>{list.title}</h2>
            <p style={{ margin: '0px', marginTop: '5px' }}>{list.todos}</p>
          </div>
        </div>
        <div className={isMouseIn ? 'editTools' : 'editToolsDisabeled'}>
          <Button variant='text' onClick={() => setIsEditingTodo(true)}>
            <ModeEditIcon color='action' />
          </Button>
        </div>
      </Box>
    </div>
  );
};
export default Todo;
