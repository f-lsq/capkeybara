import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/general/Navbar";
import HomePage from "./views/HomePage";
import ShopPage from "./views/ShopPage";
import BuildAKeyboardPage from "./views/BuildAKeyboardPage";
import AboutPage from "./views/AboutPage";
import UserLogin from "./views/UserLogin";

import './assets/fonts/index.css';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/build" element={<BuildAKeyboardPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/login" element={<UserLogin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
