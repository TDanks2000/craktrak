import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Wrapper } from "./App.styles";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Games from "./pages/Games";
import GamesCalendar from "./pages/GameCalendar";

function App() {
  return (
    <Wrapper>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:title/:id" element={<Game />} />
          <Route path="/game/:title" element={<Game />} />
          <Route path="/games" element={<Games />} />
          <Route path="/gamesCalendar" element={<GamesCalendar />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
