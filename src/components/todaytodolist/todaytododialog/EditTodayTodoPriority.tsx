import { Box, Typography } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import { useState } from 'react';
import { useAppContainer } from '../../Context';
import { TodayTodo } from '../../../types/types';

type Props = {
  list: TodayTodo;
};

const EditTodayTodoPriority = ({ list }: Props) => {
  const [priority, setPriority] = useState('');
  const { onPriorityChange } = useAppContainer();

  const handlePriorityChange = (event: any) => {
    onPriorityChange(list.id, Number(event.target.id));
  };

  return (
    <Box sx={{ margin: 1 }}>
      <Typography variant='body2' color='initial'>
        Choose Priority
      </Typography>
      <label>
        <FlagIcon
          color='error'
          className={
            list.priority === 1 ? 'priorBtn priorBtnActive' : 'priorBtn'
          }
        />
        <input
          type='submit'
          style={{ display: 'none' }}
          id='1'
          onClick={handlePriorityChange}
        />
      </label>
      <label>
        <FlagIcon
          color='secondary'
          className={
            list.priority === 2 ? 'priorBtn priorBtnActive' : 'priorBtn'
          }
        />
        <input
          type='submit'
          style={{ display: 'none' }}
          id='2'
          onClick={handlePriorityChange}
          placeholder={`${(<FlagIcon />)}`}
        />
      </label>
      <label>
        <FlagIcon
          color='info'
          className={
            list.priority === 3 ? 'priorBtn priorBtnActive' : 'priorBtn'
          }
        />
        <input
          type='submit'
          style={{ display: 'none' }}
          id='3'
          onClick={handlePriorityChange}
          placeholder={`${(<FlagIcon />)}`}
        />
      </label>
      <label>
        <FlagIcon
          color='action'
          className={
            list.priority === 4 ? 'priorBtn priorBtnActive' : 'priorBtn'
          }
        />
        <input
          type='button'
          data-value={10}
          id='4'
          style={{ display: 'none' }}
          onClick={handlePriorityChange}
          placeholder={`${(<FlagIcon />)}`}
        />
      </label>
    </Box>
  );
};
export default EditTodayTodoPriority;
