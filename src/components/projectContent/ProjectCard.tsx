import { Box, Typography } from '@mui/material';
import { ProjectList } from '../../types/types';
import AddProjectTodo from './AddProjectTodo';

type Props = {
  projectList: ProjectList;
};

const ProjectCard = ({ projectList }: Props) => {
  return (
    <Box
      sx={{
        maxWidth: 300,
        margin: 'auto',
        border: '1px solid gray',
        borderRadius: 2,
        textAlign: 'left',
        paddingX: 2,
        paddingY: 1,
        marginY: 2,
        justifyContent: 'center',
      }}
    >
      <Typography sx={{ textAlign: 'center' }} variant='h6'>
        {projectList.title}
      </Typography>
      {projectList.todos.map(todo => (
        <Typography variant='body2' key={todo.id}>
          {todo.text}
        </Typography>
      ))}
      <div style={{textAlign: "center"}}>
        <AddProjectTodo projectList={projectList} />
      </div>
    </Box>
  );
};
export default ProjectCard;
