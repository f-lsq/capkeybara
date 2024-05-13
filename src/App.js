// React Hooks
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// Styles
import { StyledGlobal } from "./components/styles/general/GlobalStyles.styled";
import { StyledFonts } from './components/styles/general/GlobalFonts.styled';

// Dependencies
import { ToastContainer } from "react-toastify";

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
import CartContextData from "./context/CartContext";
import BuyerCartPage from "./views/buyers/BuyerCartPage";
import CheckoutContextData from "./context/CheckoutContext";
import BuyerCheckoutSuccessPage from "./views/buyers/BuyerCheckoutSuccessPage";
import BuyerCheckoutCancelPage from "./views/buyers/BuyerCheckoutCancelPage";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFoundPage from "./views/NotFoundPage";
import OrderContextData from "./context/OrderContext";

function App() {
  

  return (
    <Router>
      <StyledFonts/>
      <StyledGlobal/>
      <ToastContainer/>
        <SellerContextData>
        <BuyerContextData>
        <AuthContextData>
        <ProductContextData>
        <CartContextData>
        <CheckoutContextData>
        <OrderContextData>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/shop" element={<ShopPage/>}/>
            <Route path="/build" element={<BuildAKeyboardPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/signup" element={<BuyerSignupPage/>}/>
            <Route path="/login" element={<BuyerLoginPage/>}/>
            <Route path="/profile" element={<ProtectedRoute role="buyer"><BuyerProfilePage/></ProtectedRoute>}/>
            <Route path="/cart" element={<ProtectedRoute role="buyer"><BuyerCartPage/></ProtectedRoute>}/>
            <Route path="/checkout/success" element={<ProtectedRoute role="buyer"><BuyerCheckoutSuccessPage/></ProtectedRoute>}/>
            <Route path="/checkout/cancel" element={<ProtectedRoute role="buyer"><BuyerCheckoutCancelPage/></ProtectedRoute>}/>
            <Route path="/seller/signup" element={<SellerSignupPage/>}/>
            <Route path="/seller/login" element={<SellerLoginPage/>}/>
            <Route path="/seller/profile" element={<ProtectedRoute role="seller"><SellerProfilePage/></ProtectedRoute>}/>
            <Route path="/seller/dashboard" element={<ProtectedRoute role="seller"><SellerDashboardPage/></ProtectedRoute>}/>
            <Route path="/seller/product" element={<ProtectedRoute role="seller"><SellerProductPage/></ProtectedRoute>}/>
            <Route path="/seller/product/add" element={<ProtectedRoute role="seller"><SellerAddProductPage/></ProtectedRoute>}/>
            <Route path="/seller/product/update/:productId" element={<ProtectedRoute role="seller"><SellerUpdateProductPage/></ProtectedRoute>}/>
            <Route path="/seller/product/delete/:productId" element={<ProtectedRoute role="seller"><SellerDeleteProductPage/></ProtectedRoute>}/>
            <Route path="*" element={<NotFoundPage/>}/>            
          </Routes>
        </OrderContextData>
        </CheckoutContextData>
        </CartContextData>
        </ProductContextData>
        </AuthContextData>
        </BuyerContextData>
        </SellerContextData>
    </Router>
  );
}

export default App;
