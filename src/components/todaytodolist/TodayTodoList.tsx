import { Box } from '@mui/material';
import { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import React from 'react';
import { TodayTodo } from '../../types/types';
import { useAppContainer } from '../Context';
import TodayTodoContent from './editTodayTodoList/TodayTodoContent';
import TodayTodoDialog from './todaytododialog/TodayTodoDialog';

type Props = {
  list: TodayTodo;
};

const TodayTodoList = ({ list }: Props) => {
  const { todoTags } = useAppContainer();
  const [isMouseIn, setIsMouseIn] = useState<boolean>(false);

  // ! MUI
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };


  return (
    <div>
      <Box
        sx={{
          maxWidth: 650,
          margin: 'auto',
          border: '1px solid gray',
          borderRadius: 2,
          textAlign: 'left',
          paddingX: 2,
          paddingY: 1,
          marginY: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onMouseEnter={() => setIsMouseIn(true)}
        onMouseLeave={() => setIsMouseIn(false)}
        className={
          list.priority === 4
            ? 'priority4'
            : list.priority === 3
            ? 'priority3'
            : list.priority === 2
            ? 'priority2'
            : list.priority === 1
            ? 'priority1'
            : ''
        }
      >
        <TodayTodoContent list={list} />

        {/* edit icon */}
        <div className={isMouseIn ? 'editTools' : 'editToolsDisabeled'}>
          <Button variant='text' onClick={handleClickOpen}>
            <MoreHorizIcon />
          </Button>

          <TodayTodoDialog
            list={list}
            open={open}
            setOpen={setOpen}
            todoTags={todoTags}
          />
        </div>
      </Box>
    </div>
  );
};
export default TodayTodoList;
