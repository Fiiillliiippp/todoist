import { useState } from "react";
import { TodoLists } from "../types/types";
import { Provider } from "./Context"; //Aj kontext by mohol byť mimo

export type AppState = {
  lists: TodoLists;
  onAddNewList: (val: string, todoVal: string) => void;
  onEditTitle: (idList: number, value: string, todosValue: string) => void;
  onTodoDone: (idList: number, checked: boolean) => void;
};

type Props = {
  children: (props: AppState) => JSX.Element;
};

const Container = ({ children }: Props) => {
  const [todoLists, setTodoLists] = useState<TodoLists>([]);

  const handleAddNewTodoList = (val: string, todoVal: string) => {
    setTodoLists((prevList) => [
      //toto treba prerobiť, pozri ako to máš vracať podľa toho čo sme robili
      ...prevList,
      { id: prevList.length + 1, title: val, todos: todoVal },
    ]);
  };

  const handleEditTitle = (
    idList: number, //naming
    value: string, //ak si zmenis naming vies to pouzit ako key/value
    todosValue: string
  ) => {
    setTodoLists((prevList) =>
      prevList.map((list) => {
        //naming
        if (list.id === idList) {
          //naming
          if (value.length !== 0 && todosValue.length !== 0) {
            return { ...list, title: value, todos: todosValue };
          } else if (value.length !== 0 && todosValue.length === 0) {
            return { ...list, title: value };
          } else if (value.length === 0 && todosValue.length !== 0) {
            return { ...list, todos: todosValue };
          } else {
            return { ...list };
          }
        }

        return list;
      })
    );
  }; //nad tymto sa este zamysliet

  const handleTodoIsDone = (idList: number, checked: boolean) => {
    //naming
    setTodoLists((prevList) =>
      prevList.filter((list) => {
        if (list.id === idList && checked === true) {
          //booleany sa takto necheckuju
          return list.id !== idList; //vraciaš boolean
        }
        return list; //vraciaš list
      })
    );
  }; //filtrovanie prerobit podla toho co sme sa uz bavili, lebo toto funguje omylom

  const appState: AppState = {
    lists: todoLists,
    onAddNewList: handleAddNewTodoList,
    onEditTitle: handleEditTitle,
    onTodoDone: handleTodoIsDone,
  };

  return <Provider value={appState}>{children(appState)}</Provider>;
};

export default Container;
