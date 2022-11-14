import { useState } from 'react';
import { TodayTodos, TodoTags } from '../types/types';
import { Provider } from './Context';

export type AppState = {
  lists: TodayTodos;
  todoTags: TodoTags;
  onAddNewList: (val: string, todoVal: string) => void;
  onEditTitle: (idList: number, value: string) => void;
  onEditTodo: (idList: number, value: string) => void;
  onTodoDone: (idList: number, checked: boolean) => void;
  onPriorityChange: (idList: number, value: number) => void;
  onAddTodoTag: (tagText: string) => void;
};

type Props = {
  children: (props: AppState) => JSX.Element;
};
const Container = ({ children }: Props) => {
  const [todoLists, setTodoLists] = useState<TodayTodos>([]);
  const [todoTags, setTodoTags] = useState<TodoTags>([]);

  const handleAddNewTodoList = (val: string, todoVal: string) => {
    setTodoLists(prevList => [
      ...prevList,
      { id: prevList.length + 1, title: val, todo: todoVal, priority: 4, todoTag: [] },
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

  const handlePriorityChanging = (idList: number, value: number) => {
    setTodoLists(prevList =>
      prevList.map(list => {
        if (list.id === idList) {
          return { ...list, priority: value };
        }
        return list;
      })
    );
  };;

  const handleAddTodoTag = (tagText: string) => {
    setTodoTags(prevTags => [
      ...prevTags,
      { id: prevTags.length + 1, tagText: tagText },
    ]);
  };


  const appState: AppState = {
    lists: todoLists,
    todoTags: todoTags,
    onAddNewList: handleAddNewTodoList,
    onEditTitle: handleEditTitle,
    onEditTodo: handleEditTodo,
    onTodoDone: handleTodoIsDone,
    onPriorityChange: handlePriorityChanging,
    onAddTodoTag: handleAddTodoTag,
  };

  return <Provider value={appState}>{children(appState)}</Provider>;
};

export default Container;
