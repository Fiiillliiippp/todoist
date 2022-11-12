import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import TheNavigation from './components/navigation/TheNavigation';
import Router from './components/routes/Router';

function App() {
  return (
    <BrowserRouter>
      <Container>
        {params => (
          <div className='App'>
            <TheNavigation />
            <Router />
          </div>
        )}
      </Container>
    </BrowserRouter>
  );
}

export default App;
