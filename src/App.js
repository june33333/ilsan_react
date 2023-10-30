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
import Message from "./page/Message";

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
          <Route path="/Message" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
