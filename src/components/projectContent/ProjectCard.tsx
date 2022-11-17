import { Box, Typography } from '@mui/material';
import { ProjectList } from '../../types/types';
import AddProjectTodo from './AddProjectTodo';
import ProjectTodo from './ProjectTodo';

type Props = {
  projectList: ProjectList;
};

const ProjectCard = ({ projectList }: Props) => {
  return (
    <Box
      sx={{
        width: 300,
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
        <ProjectTodo key={todo.id} todo={todo} projectList={projectList} />
      ))}
      <div style={{ textAlign: 'center' }}>
        <AddProjectTodo projectList={projectList} />
      </div>
    </Box>
  );
};
export default ProjectCard;
