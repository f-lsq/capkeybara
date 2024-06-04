import styled from "styled-components";

export const StyledAuthForm = styled.div`
// Mobile View
display: flex;
padding-top: 2.94em;
min-height: 100vh;

.authForm,
form,
form div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.authBackground {
  width: 0vw;
}

.authForm {
  width: 100vw;
  padding: 5% 0;
}

img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

h1 {
  font-family: Aldrich;
  text-align: center;
  width: 60%;
  font-size: 1.5rem;
}

form,
.authContinueBtn,
.authBackBtn,
.authRedirectBtn,
.authRedirectLink {
  width: 80%;
}

form div,
label,
input {
  width: 100%;
} 

form div p {
  color: red;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  margin: -0.7rem 0 -0.15rem 0;
  
}

form div a {
  font-size: 0.8rem;
  margin: 0 0 5% auto;
}

form div a:hover,
.authSubmitBtn:hover,
.authBackBtn:hover,
.authContinueBtn:hover,
.authRedirectBtn:hover,
.authRedirectLink:hover {
  transition: 0.5s;
}

fieldset {
  border: none;
  width: 100%;
  position: relative;
}

input {
  padding: 0 3%;
  margin: 0.5rem 0 0.8rem 0;
}

input:focus {
  outline: none;
}

.authBackBtn,
.authSubmitBtn,
.authContinueBtn {
  width: 100%;
  color: #FFFFFF;
}

.authBackBtn {
  position: absolute;
  top: -30px;
  width: auto;
  padding: 2px 5px;
  border-radius: 5px;
  cursor: pointer;
}

input,
.authSubmitBtn,
.authContinueBtn,
.authRedirectBtn,
.authRedirectLink {
  min-height: 40px;
  border-radius: 2px;
}

.authSubmitBtn,
.authContinueBtn,
.authRedirectBtn,
.authRedirectLink {
  cursor: pointer;
  margin-top: 3%;
}

.authSubmitBtn {
  margin-bottom: 0;
}

.authRedirectBtn {
  background: none;
}

.authRedirectLink {
  background: none;
  border: none;
  text-decoration: underline;
}

// Tablet View
@media screen and (min-width: 481px) and (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
}

// Laptop View
@media screen and (min-width: 769px) and (max-width: 1279px) {
  padding-top: 3.5em;

  .authBackground,
  .authForm {
    width: 50vw;
  }
  
  h1 {
    font-size: 2rem;
  }
}

// Monitor View
@media screen and (min-width: 1280px) {
  padding-top: 4.69em;

  .authBackground,
  .authForm {
    width: 50vw;
  }

  h1 {
    width: 80%;
    font-size: 2rem;
  }
}

`

export const StyledBuyerAuthForm = styled(StyledAuthForm)`
form div a {
  color: #5E8C6C;
}

form div a:hover {
  color: #81B190;
}

input,
.authBackBtn,
.authSubmitBtn,
.authContinueBtn {
  border: 1px solid #CCE2D3;
}

.authSubmitBtn {
  background: #26291E;
}

.authBackBtn,
.authContinueBtn {
  background: #88936B;
}

.authSubmitBtn:hover {
  background: #454938;
}

.authBackBtn:hover,
.authContinueBtn:hover {
  background: #96A274;
}

.authRedirectBtn {
  border: 1px solid #26291E;
}

.authRedirectBtn:hover {
  background: #F3F3F3;
}

.authRedirectLink {
  color: #CC884A;
}

.authRedirectLink:hover {
  color: #F18D31;
}
`

export const StyledSellerAuthForm = styled(StyledAuthForm)`
form div a {
  color: #CC884A;
}

form div a:hover {
  color: #F18D31;
}

input,
.authBackBtn,
.authSubmitBtn,
.authContinueBtn {
  border: 1px solid #E2D5CC;
}

.authSubmitBtn {
  background: #29251E;
}

.authBackBtn,
.authContinueBtn {
  background: #93796B;
}

.authSubmitBtn:hover {
  background: #484137;
}

.authBackBtn:hover,
.authContinueBtn:hover {
  background: #A28778;
}

.authRedirectBtn {
  border: 1px solid #29251E;
}

.authRedirectBtn:hover {
  background: #FAFAFA;
}

.authRedirectLink {
  color: #8C875E;
  
}

.authRedirectLink:hover {
  color: #A79F5C;
}

.sellerSecondPage div img {
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: contain;
  width: 20%;
  margin: 0.5rem 0 -0.2rem 0;
}
`