import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import Header from "./components/Header";
import "./styles/global.css";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;