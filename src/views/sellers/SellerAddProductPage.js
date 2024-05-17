import SellerNavbar from "../../components/sellers/SellerNavbar";
import { StyledSellerMainBody } from "../../components/styles/sellers/SellerMainBody.styled";
import SellerSidebar from "../../components/sellers/SellerSidebar";
import SellerAddProduct from "../../components/sellers/SellerAddProduct";
import SellerFooter from "../../components/sellers/SellerFooter";

export default function SellerAddProductPage() {
  return (
    <>
      <SellerNavbar />
      <StyledSellerMainBody>
        <SellerSidebar /><SellerAddProduct />
      </StyledSellerMainBody>
      <SellerFooter />
    </>
  )
}

