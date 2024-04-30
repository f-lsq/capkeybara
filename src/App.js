import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Styles
import { StyledGlobal } from "./components/styles/GlobalStyles.styled";
import { StyledFonts } from './components/styles/GlobalFonts.styled';

// Views
import Navbar from "./components/general/Navbar";
import HomePage from "./views/HomePage";
import ShopPage from "./views/ShopPage";
import BuildAKeyboardPage from "./views/BuildAKeyboardPage";
import AboutPage from "./views/AboutPage";
import BuyerLoginPage from "./views/buyers/BuyerLoginPage";
import BuyerSignupPage from "./views/buyers/BuyerSignupPage";
import BuyerContextData from "./context/BuyerContext";
import BuyerProfilePage from "./views/buyers/BuyerProfilePage";
import SellerLoginPage from "./views/sellers/SellerLoginPage";
import SellerSignupPage from "./views/sellers/SellerSignupPage";
import SellerProfilePage from "./views/sellers/SellerProfilePage";
import SellerContextData from "./context/SellerContext";


function App() {
  return (
    <Router>
      <StyledFonts/>
      <StyledGlobal/>
      <Navbar/>
        <SellerContextData>
        <BuyerContextData>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/shop" element={<ShopPage/>}/>
            <Route path="/build" element={<BuildAKeyboardPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/login" element={<BuyerLoginPage/>}/>
            <Route path="/signup" element={<BuyerSignupPage/>}/>
            <Route path="/profile" element={<BuyerProfilePage/>}/>
            <Route path="/seller/login" element={<SellerLoginPage/>}/>
            <Route path="/seller/signup" element={<SellerSignupPage/>}/>
            <Route path="/seller/profile" element={<SellerProfilePage/>}/>
          </Routes>
        </BuyerContextData>
        </SellerContextData>
    </Router>
  );
}

export default App;
