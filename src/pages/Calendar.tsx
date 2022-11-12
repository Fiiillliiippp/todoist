import FlagIcon from '@mui/icons-material/Flag';
import {
  Button,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { MouseEvent } from 'react';
const Calendar = () => {
  const [priority, setPriority] = useState('');
  
  const handlePriorityChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value)
    console.log(Number(priority));
    
  };
  return (
    <div>
      <select>
        <option value={1}><FlagIcon color='error' sx={{ margin: 'auto' }} /></option>
        <option value={2}><FlagIcon color='error' sx={{ margin: 'auto' }} /></option>
        <option value={3}><FlagIcon color='error' sx={{ margin: 'auto' }} /></option>
        <option value={4}><i className='fa fa-flag'></i></option>
      </select>
      <FormControl sx={{ width: 100 }}>
        <InputLabel id='demo-simple-select-label'>Priority</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={priority}
          onChange={handlePriorityChange}
        >
          <MenuItem value={1}>
            <FlagIcon color='error' sx={{ margin: 'auto' }} />
          </MenuItem>
          <MenuItem value={2}>
            <FlagIcon color='secondary' sx={{ margin: 'auto' }} />
          </MenuItem>
          <MenuItem value={3}>
            <FlagIcon color='success' sx={{ margin: 'auto' }} />
          </MenuItem>
          <MenuItem value={4}>
            <FlagIcon color='primary' sx={{ margin: 'auto' }} />
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Calendar;
