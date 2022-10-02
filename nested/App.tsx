import { useState } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Other from "./Other";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </HashRouter>
  );
}

function Default() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>Current count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
      <Link to={"/other"}>Other</Link>
    </div>
  );
}

export default App;
