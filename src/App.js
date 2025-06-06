import { Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
