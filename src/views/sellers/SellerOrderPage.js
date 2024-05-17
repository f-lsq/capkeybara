import SellerNavbar from "../../components/sellers/SellerNavbar";
import { StyledSellerMainBody } from "../../components/styles/sellers/SellerMainBody.styled";
import SellerSidebar from "../../components/sellers/SellerSidebar";
import SellerOrders from "../../components/sellers/SellerOrders";
import SellerFooter from "../../components/sellers/SellerFooter";

export default function SellerOrderPage() {
  return (
    <>
      <SellerNavbar />
      <StyledSellerMainBody>
        <SellerSidebar /><SellerOrders />
      </StyledSellerMainBody>
      <SellerFooter />
    </>
  )
}

