// export type TodoType = {
//   id: number,
//   text: string,
//   done: boolean
// }

export type TodoTag = {
  id: number,
  tagText: string
}

export type TodoList = {
  id: number,
  title: string,
  todo: string,
  priority: number,
  //priority from height to low---1,2,3,4
}

export type TodoTags = TodoTag[]
export type TodoLists = TodoList[]