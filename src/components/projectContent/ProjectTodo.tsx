import { Box, Button, Typography } from '@mui/material';
import { ProjectList, ProjectType } from '../../types/types';
import { useAppContainer } from '../Context';
import TodayTodoDialog from '../todaytodolist/todaytododialog/TodayTodoDialog';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useState } from 'react';
import ProjectTodoDialog from './ProjectTodoDialog';


type Props = {
  todo: ProjectType;
  projectList: ProjectList;
};

const ProjectTodo = ({ todo, projectList }: Props) => {
  const { onProjectTodoDone } = useAppContainer();
  const [isMouseIn, setIsMouseIn] = useState<boolean>(false);

  // ! MUI
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box
      sx={{
        margin: 1,
        border: '1px solid black',
        borderRadius: '14px',
        display: "flex",
        justifyContent: "space-between"
      }}
      className={todo.done === true ? 'projectTodoTrue' : ''}
      onMouseEnter={() => setIsMouseIn(true)}
      onMouseLeave={() => setIsMouseIn(false)}
    >
      <label style={{ display: 'flex' }}>
        <input
          type='checkbox'
          onChange={() => {
            onProjectTodoDone(projectList.id, todo.id);
          }}
        />
        <Typography sx={{ padding: 0.5 }} variant='body1' key={todo.id}>
          {todo.text}
        </Typography>
      </label>

      <div className={isMouseIn ? 'editTools' : 'editToolsDisabeled'}>
        <Button variant='text' onClick={handleClickOpen}>
          <MoreHorizIcon />
        </Button>

        <ProjectTodoDialog
          projectList={projectList}
          open={open}
          setOpen={setOpen}
          todo={todo}
        />
      </div>
    </Box>
  );
};
export default ProjectTodo;
