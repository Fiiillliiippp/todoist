import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { TodayTodo, TodoTags } from '../../../types/types';
import EditingTodoItem from './EditingTodoItem';
import EditTodayTodoPriority from './EditTodayTodoPriority';
import TodoTagManage from './TodoTagManage';

type Props = {
  list: TodayTodo;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  todoTags: TodoTags;
};

const TodayTodoDialog = ({ list, open, setOpen, todoTags }: Props) => {
  //Todo
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={false}
        maxWidth={'lg'}
      >
        <DialogTitle>Edit Todo</DialogTitle>
        {/* editing todo title and todo text */}
        <DialogContent sx={{ textAlign: 'center' }}>
          <EditingTodoItem list={list} />
          <hr />

          {/* setting priority */}
          <EditTodayTodoPriority list={list} />
          <hr />

          <TodoTagManage todoTags={todoTags} />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default TodayTodoDialog;
