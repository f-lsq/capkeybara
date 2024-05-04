import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Styles
import { StyledGlobal } from "./components/styles/GlobalStyles.styled";
import { StyledFonts } from './components/styles/GlobalFonts.styled';

// Views
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
import SellerDashboardPage from "./views/sellers/SellerDashboardPage";
import SellerProductPage from "./views/sellers/SellerProductPage";
import SellerAddProductPage from "./views/sellers/SellerAddProductPage";
import ProductContextData from "./context/ProductContext";
import AuthContextData from "./context/AuthContext";
import SellerUpdateProductPage from "./views/sellers/SellerUpdateProductPage";
import SellerDeleteProductPage from "./views/sellers/SellerDeleteProductPage";


function App() {
  return (
    <Router>
      <StyledFonts/>
      <StyledGlobal/>
        <SellerContextData>
        <BuyerContextData>
        <AuthContextData>
        <ProductContextData>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/shop" element={<ShopPage/>}/>
            <Route path="/build" element={<BuildAKeyboardPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/signup" element={<BuyerSignupPage/>}/>
            <Route path="/login" element={<BuyerLoginPage/>}/>
            <Route path="/profile" element={<BuyerProfilePage/>}/>
            <Route path="/seller/signup" element={<SellerSignupPage/>}/>
            <Route path="/seller/profile" element={<SellerProfilePage/>}/>
            <Route path="/seller/login" element={<SellerLoginPage/>}/>
            <Route path="/seller/dashboard" element={<SellerDashboardPage/>}/>
            <Route path="/seller/product" element={<SellerProductPage/>}/>
            <Route path="/seller/product/add" element={<SellerAddProductPage/>}/>
            <Route path="/seller/product/update/:productId" element={<SellerUpdateProductPage/>}/>
            <Route path="/seller/product/delete/:productId" element={<SellerDeleteProductPage/>}/>
          </Routes>
        </ProductContextData>
        </AuthContextData>
        </BuyerContextData>
        </SellerContextData>
    </Router>
  );
}

export default App;
