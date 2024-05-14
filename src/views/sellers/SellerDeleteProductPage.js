import SellerDeleteProduct from "../../components/sellers/SellerDeleteProduct";
import SellerFooter from "../../components/sellers/SellerFooter";
import SellerNavbar from "../../components/sellers/SellerNavbar";
import SellerSidebar from "../../components/sellers/SellerSidebar";
import { StyledSellerMainBody } from "../../components/styles/sellers/SellerMainBody.styled";

export default function SellerDeleteProductPage() {
  return (
    <>
      <SellerNavbar/>
      <StyledSellerMainBody>
        <SellerSidebar/><SellerDeleteProduct/>
      </StyledSellerMainBody>
      <SellerFooter/>
    </>
  )
}

