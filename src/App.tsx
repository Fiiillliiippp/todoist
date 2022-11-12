import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Container from "./components/Container"; //Container by nemusel byť v component
import TheNavigation from "./components/navigation/TheNavigation"; //naming - bez The
import Router from "./components/routes/Router";

function App() {
  return (
    <BrowserRouter>
      <Container>
        {(params) => (
          <div className="App">
            <TheNavigation />
            <Router />
          </div>
        )}
      </Container>
    </BrowserRouter>
  );
}

export default App;
