import SellerNavbar from "../../components/sellers/SellerNavbar";
import SellerProducts from "../../components/sellers/SellerProducts";
import SellerSidebar from "../../components/sellers/SellerSidebar";
import { StyledSellerMainBody } from "../../components/styles/SellerMainBody.styled";

export default function SellerProductPage() {
  return (
    <>
      <SellerNavbar/>
      <StyledSellerMainBody>
        <SellerSidebar/><SellerProducts/>
      </StyledSellerMainBody>
      
    </>
  )
}

