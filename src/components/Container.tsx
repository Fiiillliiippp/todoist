import { useState } from 'react';
import {
  ProjectList,
  TodayTodos,
  ProjectLists,
  TodoTags,
} from '../types/types';
import { Provider } from './Context';

export type AppState = {
  lists: TodayTodos;
  todoTags: TodoTags;
  projectLists: ProjectLists;
  onAddNewList: (val: string, todoVal: string) => void;
  onEditTitle: (idList: number, value: string) => void;
  onEditTodo: (idList: number, value: string) => void;
  onTodoDone: (idList: number, checked: boolean) => void;
  onPriorityChange: (idList: number, value: number) => void;
  onCreateTodoTag: (tagText: string) => void;
  onAddTodoTag: (tagText: string, listId: number) => void;
  onAddProjectList: (todoListTitle: string) => void;
  onAddProjectTodo: (listId: number, todoText: string) => void;
};

type Props = {
  children: (props: AppState) => JSX.Element;
};
const Container = ({ children }: Props) => {
  const [todayTodoLists, settodayTodoLists] = useState<TodayTodos>([]);
  const [todoTags, setTodoTags] = useState<TodoTags>([]);
  const [projectLists, setProjectLists] = useState<ProjectLists>([]);
  const [listTags, setListTags] = useState<
    {
      id: number;
      text: string;
    }[]
  >([]);

  const handleAddNewTodoList = (val: string, todoVal: string) => {
    settodayTodoLists(prevList => [
      ...prevList,
      {
        id: prevList.length + 1,
        title: val,
        todo: todoVal,
        priority: 4,
        listTags: [],
      },
    ]);
  };

  const handleEditTitle = (idList: number, value: string) => {
    settodayTodoLists(prevList =>
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
    settodayTodoLists(prevList =>
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
    settodayTodoLists(prevList =>
      prevList.filter(list => {
        if (list.id === idList && checked === true) {
          return list.id !== idList;
        }
        return list;
      })
    );
  };

  const handlePriorityChanging = (idList: number, value: number) => {
    settodayTodoLists(prevList =>
      prevList.map(list => {
        if (list.id === idList) {
          return { ...list, priority: value };
        }
        return list;
      })
    );
  };

  const handleAddTodoTag = (tagText: string) => {
    setTodoTags(prevTags => [
      ...prevTags,
      { id: prevTags.length + 1, tagText: tagText },
    ]);
  };

  const handleAddTag = (tagText: string, listId: number) => {
    const existingTag = todayTodoLists.map(list =>
      list.listTags.find(tag => tag.tagText === tagText)
    );
    if (existingTag) {
      setTodoTags(prevTags => [
        ...prevTags,
        { id: prevTags.length + 1, tagText: tagText },
      ]);
      const newTag = {
        id: listTags.length + 1,
        tagText: tagText,
      };
      settodayTodoLists(prevLists => {
        return prevLists.map(list => {
          if (list.id === listId) {
            list.listTags.map(tag => {
              return {
                ...tag,
                newTag,
              };
            });
            // console.log("?????,");
          }
          return list;
        });
      });
    } else {
      const newTag = {
        id: listTags.length + 1,
        tagText: tagText,
      };
      settodayTodoLists(prevLists => {
        return prevLists.map(list => {
          if (list.id === listId) {
            // console.log("!!!!");

            list.listTags.map(tag => {
              return {
                ...tag,
                newTag,
              };
            });
          }
          return list;
        });
      });
    }
  };

  const handleAddNewProjectList = (todoListTitle: string) => {
    setProjectLists(prevLists => [
      ...prevLists,
      { id: prevLists.length + 1, title: todoListTitle, todos: [] },
    ]);
  };

  const handleAddProjectTodo = (listId: number, todoText: string) => {
    setProjectLists(prevList => {
      return prevList.map(list => {
        if (list.id === listId) {
          return {
            ...list,
            todos: [
              ...list.todos,
              {
                id: list.todos.length + 1,
                text: todoText,
                done: false,
              },
            ],
          };
        }
        return list;
      });
    });
  };

  const appState: AppState = {
    lists: todayTodoLists,
    todoTags: todoTags,
    projectLists: projectLists,
    onAddNewList: handleAddNewTodoList,
    onEditTitle: handleEditTitle,
    onEditTodo: handleEditTodo,
    onTodoDone: handleTodoIsDone,
    onPriorityChange: handlePriorityChanging,
    onCreateTodoTag: handleAddTodoTag,
    onAddTodoTag: handleAddTag,
    onAddProjectList: handleAddNewProjectList,
    onAddProjectTodo: handleAddProjectTodo,
  };

  return <Provider value={appState}>{children(appState)}</Provider>;
};

export default Container;
