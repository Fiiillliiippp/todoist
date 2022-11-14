import { Box, Input } from '@mui/material';
import Button from '@mui/material/Button/Button';
import { useState } from 'react';
import { useAppContainer } from '../../Context';

const AddTodayTodo = () => {
  const { lists, onAddNewList } = useAppContainer();
  const [newListTitle, setNewListTitle] = useState('');
  const [newTodoItem, setNewTodoItem] = useState('');
  const [addingList, setAddingList] = useState<boolean>(false);

  const handleTitleChange = (e: string) => {
    setNewListTitle(e);
  };

  const handleTodoChange = (e: string) => {
    setNewTodoItem(e)
  }
  
  return (
    <div>
      {!addingList && (
        <div>
          <Button variant='text' onClick={() => setAddingList(true)}>
            Add Todo
          </Button>
        </div>
      )}
      {addingList && (
        <Box
          sx={{
            border: '1px solid black',
            borderRadius: 2,
            width: 250,
            justifyContent: 'center',
            margin: 'auto',
            marginTop: 2,
          }}
        >
          <Input
            sx={{ margin: 1 }}
            type='textarea'
            placeholder='Todo Name'
            value={newListTitle}
            onChange={e => handleTitleChange(e.target.value)}
            autoFocus
          />{' '}
          <br />
          <Input
            sx={{ fontSize: 14 }}
            type='textarea'
            placeholder='Todo Item'
            value={newTodoItem}
            onChange={e => handleTodoChange(e.target.value)}
          />{' '}
          <br />
          <Button
            sx={{ margin: 1 }}
            variant='text'
            onClick={() => {
              if (newListTitle.length !== 0) {
                onAddNewList(newListTitle, newTodoItem);
                setNewListTitle('');
                setNewTodoItem('');
                setAddingList(false);
              }
            }}
          >
            Add
          </Button>
          <Button variant='text' onClick={() => setAddingList(false)}>
            Cancel
          </Button>
        </Box>
      )}
    </div>
  );
};
export default AddTodayTodo;
