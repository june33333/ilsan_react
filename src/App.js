import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./page/Login";
import SignCode from "./page/SignCode";
import Index from "./page/Index";
import Affiliate from "./page/Affiliate";
import Blog from "./page/Blog";
import MyGridComponent from "./page/SignCodeNumber";
import GirdTest from "./page/GridTest";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signcode" element={<SignCode />} />
          <Route path="/index" element={<Index />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signcodenumber" element={<MyGridComponent />} />
          <Route path="/gridtest" element={<GirdTest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
