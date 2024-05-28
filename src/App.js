// Hooks
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Dependencies
import { ToastContainer } from "react-toastify";

// Styles
import { StyledGlobal } from "./components/styles/general/GlobalStyles.styled";
import { StyledFonts } from './components/styles/general/GlobalFonts.styled';

// Components
import TokenRefresher from "./components/general/TokenRefresher";
import ProtectedRoute from "./components/general/ProtectedRoute";

// Views
import HomePage from "./views/general/HomePage";
import ShopPage from "./views/general/ShopPage";
import BuildAKeyboardPage from "./views/general/BuildAKeyboardPage";
import AboutPage from "./views/general/AboutPage";
import NotFoundPage from "./views/general/NotFoundPage";
import BuyerSignupPage from "./views/buyers/BuyerSignupPage";
import BuyerLoginPage from "./views/buyers/BuyerLoginPage";
import BuyerProfilePage from "./views/buyers/BuyerProfilePage";
import BuyerCartPage from "./views/buyers/BuyerCartPage";
import BuyerCheckoutSuccessPage from "./views/buyers/BuyerCheckoutSuccessPage";
import BuyerCheckoutCancelPage from "./views/buyers/BuyerCheckoutCancelPage";
import SellerSignupPage from "./views/sellers/SellerSignupPage";
import SellerLoginPage from "./views/sellers/SellerLoginPage";
import SellerProfilePage from "./views/sellers/SellerProfilePage";
import SellerProductPage from "./views/sellers/SellerProductPage";
import SellerAddProductPage from "./views/sellers/SellerAddProductPage";
import SellerUpdateProductPage from "./views/sellers/SellerUpdateProductPage";
import SellerDeleteProductPage from "./views/sellers/SellerDeleteProductPage";
import SellerOrderPage from "./views/sellers/SellerOrderPage";

// Context
import AuthContextData from "./context/AuthContext";
import BuyerContextData from "./context/BuyerContext";
import CartContextData from "./context/CartContext";
import CheckoutContextData from "./context/CheckoutContext";
import OrderContextData from "./context/OrderContext";
import ProductContextData from "./context/ProductContext";
import SellerContextData from "./context/SellerContext";

function App() {
  return (
    <Router>
      <StyledFonts />
      <StyledGlobal />
      <ToastContainer />
      <SellerContextData>
        <BuyerContextData>
          <AuthContextData>
            <ProductContextData>
              <CartContextData>
                <CheckoutContextData>
                  <OrderContextData>
                    <TokenRefresher/>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/shop" element={<ShopPage />} />
                      <Route path="/build" element={<BuildAKeyboardPage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="*" element={<NotFoundPage />} />
                      <Route path="/signup" element={<BuyerSignupPage />} />
                      <Route path="/login" element={<BuyerLoginPage />} />
                      <Route path="/profile" element={<ProtectedRoute role="buyer"><BuyerProfilePage /></ProtectedRoute>} />
                      <Route path="/cart" element={<ProtectedRoute role="buyer"><BuyerCartPage /></ProtectedRoute>} />
                      <Route path="/checkout/success" element={<ProtectedRoute role="buyer"><BuyerCheckoutSuccessPage /></ProtectedRoute>} />
                      <Route path="/checkout/cancel" element={<ProtectedRoute role="buyer"><BuyerCheckoutCancelPage /></ProtectedRoute>} />
                      <Route path="/seller/signup" element={<SellerSignupPage />} />
                      <Route path="/seller/login" element={<SellerLoginPage />} />
                      <Route path="/seller/profile" element={<ProtectedRoute role="seller"><SellerProfilePage /></ProtectedRoute>} />
                      <Route path="/seller/product" element={<ProtectedRoute role="seller"><SellerProductPage /></ProtectedRoute>} />
                      <Route path="/seller/product/add" element={<ProtectedRoute role="seller"><SellerAddProductPage /></ProtectedRoute>} />
                      <Route path="/seller/product/update/:productId" element={<ProtectedRoute role="seller"><SellerUpdateProductPage /></ProtectedRoute>} />
                      <Route path="/seller/product/delete/:productId" element={<ProtectedRoute role="seller"><SellerDeleteProductPage /></ProtectedRoute>} />
                      <Route path="/seller/order" element={<ProtectedRoute role="seller"><SellerOrderPage /></ProtectedRoute>} />
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
