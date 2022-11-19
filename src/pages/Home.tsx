import { Container } from '@mui/material';
import { useAppContainer } from '../components/Context';
import AddTodayTodo from '../components/todaytodolist/addingToTodayTodoList/AddTodayTodo';
import TodayTodoList from '../components/todaytodolist/TodayTodoList';

const Home = () => {
  const { lists } = useAppContainer();
  return (
    <Container  >
      {/* Todo Item */}
      {lists.map(list => (
        <TodayTodoList key={list.id} list={list} />
      ))}
      {/* adding todo */}
      <AddTodayTodo />
    </Container>
  );
};
export default Home;
