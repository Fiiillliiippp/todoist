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
import { TodoTags } from '../types/types';
import { useAppContainer } from './Context';

type Props = {
  listTags: {
    id: number;
    text: string;
  }[];
};

const TodoTagManage = ({ listTags }: Props) => {
  const [newTodoTag, setNewTodoTag] = useState('');
  const { onAddTodoTag } = useAppContainer();
  const [addingNewTodoTag, setAddingNewTodoTag] = useState<boolean>(false);
  const handleNewTodoTag = (text: string) => {
    setNewTodoTag(text);
  };

  if (addingNewTodoTag || listTags.length === 0) {
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
              onAddTodoTag(newTodoTag);
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
        <Select>
          {listTags.map(tag => (
            <MenuItem>{tag.text}</MenuItem>
          ))}
          <MenuItem onClick={() => setAddingNewTodoTag(true)}>
            Add New Tag
          </MenuItem>
        </Select>
      </FormControl>
    );
  }
  return (
    // <Box>
    //   {todoTags.length === 0 ? (
    //     <div>
    //       <>
    //         <Typography variant='body2'>No tags, add one</Typography>
    //         <Input
    //           placeholder='New Tag'
    //           value={newTodoTag}
    //           onChange={e => handleNewTodoTag(e.target.value)}
    //         />{' '}
    //         <br />
    //         <Button
    //           onClick={() => {
    //             onAddTodoTag(newTodoTag);
    //             setAddingNewTodoTag(false);
    //           }}
    //         >
    //           Create Todo Tag
    //         </Button>
    //       </>
    //     </div>
    //   ) : (
    //     <FormControl fullWidth>
    //       <InputLabel>Select Tag</InputLabel>
    //       <Select>
    //         {todoTags.map(tag => (
    //           <MenuItem>{tag.tagText}</MenuItem>
    //         ))}
    //         <MenuItem onClick={() => setAddingNewTodoTag(true)}>
    //           Add New Tag
    //         </MenuItem>
    //       </Select>
    //     </FormControl>
    //   )}
    // </Box>
    <p>Tags</p>
  );
};
export default TodoTagManage;
