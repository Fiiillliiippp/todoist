import { Box, Input, Button } from '@mui/material';
import { useState } from 'react';
import { useAppContainer } from '../../Context';

const AddProjectTitle = () => {
  const { onAddProjectList } = useAppContainer();
  const [newProjectListTitle, setNewProjectListTitle] = useState('');
  const [isAddingNewTitle, setIsAddingNewTitle] = useState<boolean>(false);
  const handleNewProjectTitle = (newTitle: string) => {
    setNewProjectListTitle(newTitle);
  };

  if (isAddingNewTitle) {
    return (
      <Box>
        <Input
          type='text'
          value={newProjectListTitle}
          autoFocus
          sx={{ margin: 1 }}
          onChange={newTitle => handleNewProjectTitle(newTitle.target.value)}
        />
        <Button
          sx={{ margin: 1 }}
          variant='text'
          onClick={() => {
            onAddProjectList(newProjectListTitle);
            setIsAddingNewTitle(false);
            setNewProjectListTitle('');
          }}
        >
          Add TodoList
        </Button>
        <Button
          sx={{ margin: 1 }}
          variant='text'
          onClick={() => setIsAddingNewTitle(false)}
        >
          Calcel
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Button
        sx={{ margin: 1 }}
        variant='text'
        onClick={() => setIsAddingNewTitle(true)}
      >
        Add TodoList
      </Button>
    </Box>
  );
};
export default AddProjectTitle;
