// export type TodoType = {
//   id: number,
//   text: string,
//   done: boolean
// }

export type TodoTag = {
  id: number;
  tagText: string;
};

export type Todo = {
  id: number;
  title: string;
  desc: string;
  tags: TodoTag[];
  done: boolean;
};

export type TodoList = {
  id: number;
  title: string;
  todos: Todo[];
  priority: number;
  listDone: boolean;
  listTags: {
    id: number;
    text: string;
  }[];
  //priority from height to low---1,2,3,4
};

export type TodoTags = TodoTag[];
export type TodoLists = TodoList[];
