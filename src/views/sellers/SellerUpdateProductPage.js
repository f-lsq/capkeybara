import SellerNavbar from "../../components/sellers/SellerNavbar";
import SellerSidebar from "../../components/sellers/SellerSidebar";
import SellerUpdateProduct from "../../components/sellers/SellerUpdateProduct";
import { StyledSellerMainBody } from "../../components/styles/sellers/SellerMainBody.styled";

export default function SellerDeleteProductPage() {
  return (
    <>
      <SellerNavbar/>
      <StyledSellerMainBody>
        <SellerSidebar/><SellerUpdateProduct/>
      </StyledSellerMainBody>
      
    </>
  )
}

