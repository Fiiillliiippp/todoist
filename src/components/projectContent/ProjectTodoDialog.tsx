import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { ProjectList, ProjectType } from '../../types/types';
import EditingTodoItem from '../todaytodolist/todaytododialog/EditingTodoItem';
import EditTodayTodoPriority from '../todaytodolist/todaytododialog/EditTodayTodoPriority';
import TodoTagManage from '../todaytodolist/todaytododialog/TodoTagManage';
import EditProjectItemPriority from './EditProjectItem';
import EditProjectItem from './EditProjectItem';

type Props = {
  projectList: ProjectList;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  todo: ProjectType;
};

const ProjectTodoDialog = ({ projectList, open, setOpen, todo }: Props) => {
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
          <EditProjectItem projectList={projectList} todo={todo}  />
          <hr />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ProjectTodoDialog;
