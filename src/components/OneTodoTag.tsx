import { TodoList, TodoTag } from '../types/types';

type Props = {
  tag: TodoTag
};

const OneTodoTag = ({tag}: Props) => {
  return <div>
    <div>{tag.tagText}</div>
  </div>;
};
export default OneTodoTag;
