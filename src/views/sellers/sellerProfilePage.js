import SellerNavbar from "../../components/sellers/SellerNavbar";
import { StyledSellerMainBody } from "../../components/styles/sellers/SellerMainBody.styled";
import SellerSidebar from "../../components/sellers/SellerSidebar";
import SellerProfile from "../../components/sellers/SellerProfile";
import SellerFooter from "../../components/sellers/SellerFooter";

export default function SellerProfilePage() {
  return (
    <>
      <SellerNavbar />
      <StyledSellerMainBody>
        <SellerSidebar /><SellerProfile />
      </StyledSellerMainBody>
      <SellerFooter />

    </>
  )
}

