import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

function About() {
  return <h1>About</h1>;
}

export default App;
