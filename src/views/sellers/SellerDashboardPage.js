import SellerNavbar from "../../components/sellers/SellerNavbar";
import SellerSidebar from "../../components/sellers/SellerSidebar";
import { StyledSellerMainBody } from "../../components/styles/sellers/SellerMainBody.styled";

export default function SellerDashboardPage() {
  return (
    <>
      <SellerNavbar/>
      <StyledSellerMainBody>
        <SellerSidebar/><h1>Seller Dashboard Page</h1>
      </StyledSellerMainBody>
      
    </>
  )
}

