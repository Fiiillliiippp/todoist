import {
  Box,
  Typography,
  Input,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';
import { TodayTodo, TodoTags } from '../../../types/types';
import { useAppContainer } from '../../Context';

type Props = {
  todoTags: TodoTags;
  list: TodayTodo;
};

const TodoTagManage = ({ todoTags, list }: Props) => {
  const [newTodoTag, setNewTodoTag] = useState('');
  const { onCreateTodoTag, onAddTodoTag } = useAppContainer();
  const [addingNewTodoTag, setAddingNewTodoTag] = useState<boolean>(false);
  const handleNewTodoTag = (text: string) => {
    setNewTodoTag(text);
  };

  if (addingNewTodoTag || todoTags.length === 0) {
    return (
      <div>
        <>
          <Typography variant='body2'>No tags, add one</Typography>
          <Input
            placeholder='New Tag'
            value={newTodoTag}
            onChange={e => handleNewTodoTag(e.target.value)}
          />{' '}
          <br />
          <Button
            onClick={() => {
              onAddTodoTag(newTodoTag, list.id);
              setNewTodoTag('');
              setAddingNewTodoTag(false);
            }}
          >
            Create Todo Tag
          </Button>
        </>
      </div>
    );
  }

  if (!addingNewTodoTag) {
    return (
      <FormControl fullWidth>
        <InputLabel>Select Tag</InputLabel>
        <Select  >
          {todoTags.map(tag => (
            <MenuItem key={tag.id}>{tag.tagText}</MenuItem>
          ))}
          <MenuItem onClick={() => setAddingNewTodoTag(true)}>
            Add New Tag
          </MenuItem>
        </Select>
      </FormControl>
    );
  }
  return <p>Tags</p>;
};
export default TodoTagManage;
