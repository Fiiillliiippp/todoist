import { Checkbox } from '@mui/material';
import { useState } from 'react';
import { TodayTodo } from '../../../types/types';
import { useAppContainer } from '../../Context';

type Props = {
  list: TodayTodo;
};

const TodayTodoContent = ({ list }: Props) => {
  const { onTodoDone } = useAppContainer();

  const [todoIsChecked, setTodoIsChecked] = useState<boolean>(true);
  const handleTodoDone = () => {
    setTodoIsChecked(!todoIsChecked);
    onTodoDone(list.id, todoIsChecked);
  };
  return (
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
      </div>
      <div>
        <h2 style={{ margin: '0px', marginTop: '5px' }}>{list.title}</h2>
        <p style={{ margin: '0px', marginTop: '5px' }}>{list.todo}</p>
        {/* <div style={{ display: 'flex' }}>
          {todoTags.map(tag => (
                <div className={todoTags.length === 0 ? 'none' : 'TodoTag'} style={{margin: "0 5px"}}>
                  <TagForTodo key={tag.id} tag={tag} />
                </div>
              ))}
        </div> */}
      </div>
    </div>
  );
};
export default TodayTodoContent;
