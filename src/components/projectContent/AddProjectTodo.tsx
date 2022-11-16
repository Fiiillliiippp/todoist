import { Box, Button, Input } from '@mui/material';
import { useState } from 'react';
import { ProjectList } from '../../types/types';
import { useAppContainer } from '../Context';

type Props = {
  projectList: ProjectList;
};
const AddProjectTodo = ({ projectList }: Props) => {
  const { onAddProjectTodo } = useAppContainer();
  const [newProjectTodoText, setNewProjectTodoText] = useState('');
  const [isAddingNewTodo, setIsAddingNewTodo] = useState<boolean>(false);
  const handleNewTodoText = (newTodoText: string) => {
    setNewProjectTodoText(newTodoText);
  };

  if (isAddingNewTodo) {
    return (
      <Box>
        <Input
          type='text'
          autoFocus
          sx={{ margin: 1 }}
          value={newProjectTodoText}
          onChange={newTodoText => handleNewTodoText(newTodoText.target.value)}
        />
        <Button
          sx={{ margin: 1 }}
          variant='text'
          onClick={() => {
            onAddProjectTodo(projectList.id, newProjectTodoText);
            setIsAddingNewTodo(false);
            setNewProjectTodoText('');
          }}
        >
          Add Todo
        </Button>
        <Button
          sx={{ margin: 1 }}
          variant='text'
          onClick={() => setIsAddingNewTodo(false)}
        >
          Cancel
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Button
        sx={{ margin: 1 }}
        variant='text'
        onClick={() => setIsAddingNewTodo(true)}
      >
        Add New Todo
      </Button>
    </Box>
  );
};
export default AddProjectTodo;
