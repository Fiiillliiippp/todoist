import { TagSharp } from '@mui/icons-material';
import { useState } from 'react';
import { TodoLists, TodoTags } from '../types/types';
import { Provider } from './Context';

export type AppState = {
  lists: TodoLists;
  todoTags: TodoTags;
  onAddNewList: (val: string, todoVal: string) => void;
  onEditTitle: (idList: number, value: string) => void;
  onEditTodo: (idList: number, value: string) => void;
  onTodoDone: (idList: number) => void;
  onPriorityChange: (idList: number, value: number) => void;
  onAddTodoTag: (tagText: string) => void;

  onAddTodo(listId: number, todo: { title: string; desc: string }): void;
  listTags: {
    id: number;
    text: string;
  }[];
};

type Props = {
  children: (props: AppState) => JSX.Element;
};
const Container = ({ children }: Props) => {
  const [todoLists, setTodoLists] = useState<TodoLists>([]);
  const [todoTags, setTodoTags] = useState<TodoTags>([]);
  const [listTags, setListTags] = useState<
    {
      id: number;
      text: string;
    }[]
  >([]);

  const handleAddNewTodoList = (title: string) => {
    setTodoLists(prevLists => {
      return [
        ...prevLists,
        {
          id: prevLists.length + 1,
          priority: 4,
          title,
          todos: [],
          listDone: false,
          listTags: [],
        },
      ];
    });
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

  const handleTodoIsDone = (listId: number) => {
    setTodoLists(prevList =>
      prevList.filter(list => {
        if (list.id === listId) {
          return {
            ...list,
            done: true,
          };
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
  };

  const handleAddTodoTag = (tagText: string) => {
    setTodoTags(prevTags => [
      ...prevTags,
      { id: prevTags.length + 1, tagText: tagText },
    ]);
  };

  const handleAddTag = (tagText: string, listId: number, todoid: number) => {
    const existingTag = listTags.find(tag => tag.text === tagText); // tu pozrieš či taky tag už maš
    if (!existingTag) {
      // tu si ho vytvoriš ked ho nemaš
      const newTag = {
        //lebo ho pridavaš k tagom a zaroven k listu/todo
        id: listTags.length + 1,
        text: tagText,
      };
      setListTags(prev => {
        return [...prev, newTag];
      });
      setTodoLists(prevLists => {
        return prevLists.map(list => {
          if (list.id === listId) {
            list.todos.map(todo => {
              if (todo.id === todoid) {
                return {
                  ...todo,
                  tags: [...todo.tags, newTag],
                };
              }

              return todo;
            });
          }

          return list;
        });
      });
    } else {
      setTodoLists(prevLists => {
        return prevLists.map(list => {
          if (list.id === listId) {
            list.todos.map(todo => {
              if (todo.id === todoid) {
                return {
                  ...todo,
                  tags: [...todo.tags, existingTag],
                };
              }

              return todo;
            });
          }

          return list;
        });
      });
    }
  };

  const handleAddTodo = (
    listId: number,
    todo: { title: string; desc: string }
  ) => {
    setTodoLists(prevLists => {
      return prevLists.map(list => {
        if (listId === list.id) {
          return {
            ...list,
            todos: [
              ...list.todos,
              {
                id: list.todos.length + 1,
                title: todo.title,
                desc: todo.desc,
                done: false,
                tags: [],
              },
            ],
          };
        }

        return list;
      });
    });
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

    onAddTodo: handleAddTodo,
    listTags,
  };

  return <Provider value={appState}>{children(appState)}</Provider>;
};

export default Container;
