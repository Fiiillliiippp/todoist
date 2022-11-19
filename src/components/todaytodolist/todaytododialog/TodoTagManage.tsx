import {
  Typography,
  Input,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
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
  const { onAddTodoTag } = useAppContainer();
  const [addingNewTodoTag, setAddingNewTodoTag] = useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState<string>('');
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

  const handleChange = (event: any) => {
    setSelectedTag(event.target.value);
  };

  if (!addingNewTodoTag) {
    return (
      <div>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Select Tag</InputLabel>
          <Select
            onChange={handleChange}
            value={selectedTag}
            labelId='demo-simple-select-label'
            id='demo-simple-select'
          >
            {todoTags.map(tag => (
              <MenuItem value={tag.tagText} key={tag.id}>
                {tag.tagText}
              </MenuItem>
            ))}
            <MenuItem onClick={() => setAddingNewTodoTag(true)}>
              Add New Tag
            </MenuItem>
          </Select>
        </FormControl>
        <Button onClick={() => onAddTodoTag(selectedTag, list.id)} >Add Selected Tag</Button>
      </div>
    );
  }
  return <p>Tags</p>;
};
export default TodoTagManage;
