import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Wrapper } from "./App.styles";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Game from "./pages/Game";

function App() {
  return (
    <Wrapper>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:title/:id" element={<Game />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
