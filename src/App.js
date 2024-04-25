import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/general/Navbar";
import HomePage from "./views/HomePage";
import ShopPage from "./views/ShopPage";
import BuildAKeyboardPage from "./views/BuildAKeyboardPage";
import AboutPage from "./views/AboutPage";
import UserLogin from "./views/UserLogin";
import { StyledGlobal } from "./components/styles/GlobalStyles.styled";
import { StyledFonts } from './components/styles/GlobalFonts.styled';


function App() {
  return (
    <Router>
      <StyledFonts/>
      <StyledGlobal/>
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
