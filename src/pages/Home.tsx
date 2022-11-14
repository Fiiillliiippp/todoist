import { useAppContainer } from '../components/Context';
import AddTodayTodo from '../components/todaytodolist/addingToTodayTodoList/AddTodayTodo';
import TodayTodoList from '../components/todaytodolist/TodayTodoList';

const Home = () => {
  const { lists } = useAppContainer();
  return (
    <div>
      {/* Todo Item */}
      {lists.map(list => (
        <TodayTodoList key={list.id} list={list} />
      ))}
      {/* adding todo */}
      <AddTodayTodo />
    </div>
  );
};
export default Home;
