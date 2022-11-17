import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useAppContainer } from '../components/Context';
import AddProjectTitle from '../components/projectContent/addToProject/AddProjectTitle';
import ProjectCard from '../components/projectContent/ProjectCard';

const Projects = () => {
  const { projectLists } = useAppContainer();
  return (
    <Box>
      <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        {projectLists.length === 0 ? (
          <Typography variant='h6'>No Projects, Add First One</Typography>
        ) : (
          projectLists.map(projectList => (
            <div style={{margin: "5px 15px"}}>
              <ProjectCard key={projectList.id} projectList={projectList} />
            </div>
          ))
        )}
      </div>
      <div>
        <AddProjectTitle />
      </div>
    </Box>
  );
};
export default Projects;
