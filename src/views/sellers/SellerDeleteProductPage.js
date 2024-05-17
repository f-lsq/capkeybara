import SellerNavbar from "../../components/sellers/SellerNavbar";
import { StyledSellerMainBody } from "../../components/styles/sellers/SellerMainBody.styled";
import SellerSidebar from "../../components/sellers/SellerSidebar";
import SellerDeleteProduct from "../../components/sellers/SellerDeleteProduct";
import SellerFooter from "../../components/sellers/SellerFooter";

export default function SellerDeleteProductPage() {
  return (
    <>
      <SellerNavbar />
      <StyledSellerMainBody>
        <SellerSidebar /><SellerDeleteProduct />
      </StyledSellerMainBody>
      <SellerFooter />
    </>
  )
}

