import SellerFooter from "../../components/sellers/SellerFooter";
import SellerNavbar from "../../components/sellers/SellerNavbar";
import SellerProducts from "../../components/sellers/SellerProducts";
import SellerSidebar from "../../components/sellers/SellerSidebar";
import { StyledSellerMainBody } from "../../components/styles/sellers/SellerMainBody.styled";

export default function SellerProductPage() {
  return (
    <>
      <SellerNavbar/>
      <StyledSellerMainBody>
        <SellerSidebar/><SellerProducts/>
      </StyledSellerMainBody>
      <SellerFooter/>
      
    </>
  )
}

