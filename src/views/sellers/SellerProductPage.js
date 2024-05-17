import SellerNavbar from "../../components/sellers/SellerNavbar";
import { StyledSellerMainBody } from "../../components/styles/sellers/SellerMainBody.styled";
import SellerSidebar from "../../components/sellers/SellerSidebar";
import SellerProducts from "../../components/sellers/SellerProducts";
import SellerFooter from "../../components/sellers/SellerFooter";

export default function SellerProductPage() {
  return (
    <>
      <SellerNavbar />
      <StyledSellerMainBody>
        <SellerSidebar /><SellerProducts />
      </StyledSellerMainBody>
      <SellerFooter />
    </>
  )
}

