import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from '../../data/routes';

const TheNavigation = () => {
  return (
    <nav style={{margin: "15px"}}>
      <Button variant='outlined' sx={{marginX: 1, padding: "4px 8px"}} >
        <Link className="navLink" to={`${routes.home}`}>Home</Link>
      </Button>
      <Button variant='outlined' sx={{padding: "4px 8px"}} >
        <Link className="navLink" to={`${routes.calendar}`}>Calendar</Link>
      </Button>
      <Button variant='outlined' sx={{marginX: 1, padding: "4px 8px"}} >
        <Link className="navLink" to={`${routes.filters}`}>Filters</Link>
      </Button>
      <Button variant='outlined' sx={{padding: "4px 8px"}} >
        <Link className="navLink" to={`${routes.projects}`}>Projects</Link>
      </Button>
    </nav>
  );
};

export default TheNavigation;
