import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Wrapper } from "./App.styles";
import Nav from "./components/Nav";

function App() {
  return (
    <Wrapper>
      <Router>
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}

function About() {
  return <h1>About</h1>;
}

export default App;
