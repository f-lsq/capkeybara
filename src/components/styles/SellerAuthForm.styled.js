import styled from "styled-components";

export const StyledSellerAuthForm = styled.div`
// Mobile View
display: flex;

.authForm,
form,
form div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.authBackground,
.authForm {
  height: calc(100vh - 2.94em);
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
}

h1,
form,
button {
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
  color: #CC884A;
}

form div a:hover {
  color: #F18D31;
  transition: 0.5s;
}

fieldset {
  border: none;
  width: 100%;
  position: relative;
}

input {
  border: 1px solid #E2D5CC;
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
  border: 1px solid #E2D5CC;
}

.authBackBtn {
  position: absolute;
  top: -50px;
  width: auto;
  padding: 2px 5px;
  border-radius: 5px;
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
  transition: 0.5s;
}

.authBackBtn:hover,
.authContinueBtn:hover {
  background: #A28778;
  transition: 0.5s;
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
button {
  cursor: pointer;
  margin-top: 3%;
}

.authRedirectBtn {
  background: none;
  border: 1px solid #29251E;
}

.authRedirectBtn:hover {
 background: #FAFAFA;
 transition: 0.5s;
}

.authRedirectLink {
  background: none;
  border: none;
  text-decoration: underline;
  color: #8C875E;
}

.authRedirectLink:hover {
  color: #A79F5C;
  transition: 0.5s;
}

.Toastify__toast-container {
  width: 35vw;
}


// Tablet View
@media screen and (min-width: 481px) and (max-width: 768px) {

}

// Laptop View
@media screen and (min-width: 769px) and (max-width: 1279px) {
.authBackground,
.authForm {
    height: calc(100vh - 3.5em);
    width: 50vw;
  }  
}

// Monitor View
@media screen and (min-width: 1280px) {
  .authBackground,
  .authForm {
    height: calc(100vh - 4.9em);
    width: 50vw;
  }
}

`

