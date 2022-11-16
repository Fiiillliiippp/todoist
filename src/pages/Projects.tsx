import { Typography } from '@mui/material';
import { useState } from 'react';
import { useAppContainer } from '../components/Context';
import AddProjectTitle from '../components/projectContent/addToProject/AddProjectTitle';
import ProjectCard from '../components/projectContent/ProjectCard';

const Projects = () => {
  const { projectLists, onAddProjectList } = useAppContainer();
  return (
    <div>
      {projectLists.length === 0 ? (
        <Typography variant='h6'>No Projects, Add First One</Typography>
      ) : (
        projectLists.map(projectList => (
          <ProjectCard key={projectList.id} projectList={projectList} />
        ))
      )}
      <AddProjectTitle />
    </div>
  );
};
export default Projects;
