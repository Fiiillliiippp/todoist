// export type TodoType = {
//   id: number,
//   text: string,
//   done: boolean
// }

export type TodoTag = {
  id: number,
  tagText: string
}

export type TodayTodo = {
  id: number,
  title: string,
  todo: string,
  priority: number,
  listTags: TodoTag[]
  //priority from height to low---1,2,3,4
}

export type ProjectType = {
  id: number, 
  text: string,
  done: boolean
}

export type ProjectList = {
  id: number,
  title: string,
  todos: ProjectType[],
}

export type TodoTags = TodoTag[]
export type TodayTodos = TodayTodo[]
export type ProjectLists = ProjectList[]