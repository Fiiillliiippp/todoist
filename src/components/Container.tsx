import { useState } from 'react';
import { TodoLists } from '../types/types';
import { Provider } from './Context';

export type AppState = {
  lists: TodoLists;
  onAddNewList: (val: string, todoVal: string) => void;
  onEditTitle: (idList: number, value: string) => void;
  onEditTodo: (idList: number, value: string) => void;
  onTodoDone: (idList: number, checked: boolean) => void;
};

type Props = {
  children: (props: AppState) => JSX.Element;
};
const Container = ({ children }: Props) => {
  const [todoLists, setTodoLists] = useState<TodoLists>([]);

  const handleAddNewTodoList = (val: string, todoVal: string) => {
    setTodoLists(prevList => [
      ...prevList,
      { id: prevList.length + 1, title: val, todo: todoVal, priorit: 4 },
    ]);
  };

  const handleEditTitle = (idList: number, value: string) => {
    setTodoLists(prevList =>
      prevList.map(list => {
        if (list.id === idList) {
          if (value.length !== 0) {
            return { ...list, title: value };
          }
          return { ...list };
        }
        return list;
      })
    );
  };
  const handleEditTodo = (idList: number, value: string) => {
    setTodoLists(prevList =>
      prevList.map(list => {
        if (list.id === idList) {
          if (value.length !== 0) {
            return { ...list, todo: value };
          }
          return { ...list };
        }
        return list;
      })
    );
  };

  const handleTodoIsDone = (idList: number, checked: boolean) => {
    setTodoLists(prevList =>
      prevList.filter(list => {
        if (list.id === idList && checked === true) {
          return list.id !== idList;
        }
        return list;
      })
    );
  };

  const appState: AppState = {
    lists: todoLists,
    onAddNewList: handleAddNewTodoList,
    onEditTitle: handleEditTitle,
    onEditTodo: handleEditTodo,
    onTodoDone: handleTodoIsDone,
  };

  return <Provider value={appState}>{children(appState)}</Provider>;
};

export default Container;
