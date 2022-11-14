import { Box, Checkbox } from '@mui/material';
import { useState } from 'react';
import { TodoList } from '../types/types';
import { useAppContainer } from './Context';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import React from 'react';
import EditTodoDialog from './EditTodoDialog';
import EditingTodoItem from './EditingTodoItem';
import TagForTodo from './TagForTodo';

type Props = {
  list: TodoList;
};

const Todo = ({ list }: Props) => {
  const { todoTags, onTodoDone } = useAppContainer();
  const [isEditingTodo, setIsEditingTodo] = useState<boolean>(false);
  const [isMouseIn, setIsMouseIn] = useState<boolean>(false);
  const [todoIsChecked, setTodoIsChecked] = useState<boolean>(true);

  // ! MUI
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  //Todo
  const handleTodoDone = () => {
    setTodoIsChecked(!todoIsChecked);
    onTodoDone(list.id);
  };

  if (isEditingTodo) {
    return (
      <div>
        <EditingTodoItem list={list} />
      </div>
    );
  }

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
        <div
          style={{
            maxWidth: '90%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>
            <Checkbox size='small' onChange={handleTodoDone} />

            {/* actual todo title and text */}
          </div>
          <div>
            <h2 style={{ margin: '0px', marginTop: '5px' }}>{list.title}</h2>
            {list.todos.map(t => (
              <div style={{ border: '2px solid red' }}>
                {t.title}
                <div>
                  <h3>Tags</h3>
                  {t.tags.map(tag => (
                    <div>{tag.tagText}</div>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ display: 'flex' }}>
              {todoTags.map(tag => (
                <div
                  className={todoTags.length === 0 ? 'none' : 'TodoTag'}
                  style={{ margin: '0 5px' }}
                >
                  <TagForTodo key={tag.id} tag={tag} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1>tags</h1>
            {list.listTags.map(tag => (
              <p>{tag.text}</p>
            ))}
          </div>
        </div>

        {/* edit icon */}
        <div className={isMouseIn ? 'editTools' : 'editToolsDisabeled'}>
          <Button variant='text' onClick={handleClickOpen}>
            <MoreHorizIcon />
          </Button>

          <EditTodoDialog
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
export default Todo;
