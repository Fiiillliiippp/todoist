import { TodoTag } from "../../types/types";

type Props = {
  tag: TodoTag
};

const TagForTodo = ({tag}: Props) => {
  return <div>
    <div>{tag.tagText}</div>
  </div>;
};
export default TagForTodo;
