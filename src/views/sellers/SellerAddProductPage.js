import SellerAddProduct from "../../components/sellers/SellerAddProduct";
import SellerNavbar from "../../components/sellers/SellerNavbar";
import SellerSidebar from "../../components/sellers/SellerSidebar";
import { StyledSellerMainBody } from "../../components/styles/sellers/SellerMainBody.styled";

export default function SellerAddProductPage() {
  return (
    <>
      <SellerNavbar/>
      <StyledSellerMainBody>
        <SellerSidebar/><SellerAddProduct/>
      </StyledSellerMainBody>
      
    </>
  )
}

