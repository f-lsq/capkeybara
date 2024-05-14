import SellerNavbar from "../../components/sellers/SellerNavbar";
import SellerOrders from "../../components/sellers/SellerOrders";
import SellerSidebar from "../../components/sellers/SellerSidebar";
import { StyledSellerMainBody } from "../../components/styles/sellers/SellerMainBody.styled";

export default function SellerOrderPage() {
  return (
    <>
      <SellerNavbar/>
      <StyledSellerMainBody>
        <SellerSidebar/><SellerOrders/>
      </StyledSellerMainBody>
      
    </>
  )
}

