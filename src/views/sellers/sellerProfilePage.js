import SellerFooter from "../../components/sellers/SellerFooter";
import SellerNavbar from "../../components/sellers/SellerNavbar";
import SellerProfile from "../../components/sellers/SellerProfile";
import SellerSidebar from "../../components/sellers/SellerSidebar";
import { StyledSellerMainBody } from "../../components/styles/sellers/SellerMainBody.styled";

export default function SellerProfilePage() {
  return (
    <>
      <SellerNavbar/>
      <StyledSellerMainBody>
        <SellerSidebar/><SellerProfile/>
      </StyledSellerMainBody>
      <SellerFooter/>
      
    </>
  )
}

