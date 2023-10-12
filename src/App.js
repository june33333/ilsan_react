import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import SignCode from "./page/SignCode";
import Index from "./page/Index";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signcode" element={<SignCode />} />
          <Route path="/index" element={<Index />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
