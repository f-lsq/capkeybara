import styled from "styled-components";

export const StyledBuyerAuthForm = styled.div`
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
  color: #5E8C6C;
}

form div a:hover {
  color: #81B190;
  transition: 0.5s;
}

fieldset {
  border: none;
  width: 100%;
  position: relative;
}

input {
  border: 1px solid #CCE2D3;
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
  border: 1px solid #CCE2D3;
}

.authBackBtn {
  position: absolute;
  top: -50px;
  width: auto;
  padding: 2px 5px;
  border-radius: 5px;
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
  transition: 0.5s;
}

.authBackBtn:hover,
.authContinueBtn:hover {
  background: #96A274;
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
.authContinueBtn,
.authRedirectBtn,
.authRedirectLink {
  cursor: pointer;
  margin-top: 3%;
}

.authRedirectBtn {
  background: none;
  border: 1px solid #26291E;
}

.authRedirectBtn:hover {
 background: #F3F3F3;
 transition: 0.5s;
}

.authRedirectLink {
  background: none;
  border: none;
  text-decoration: underline;
  color: #CC884A;
}

.authRedirectLink:hover {
  color: #F18D31;
  transition: 0.5s;
}

.Toastify__toast {
  margin-left: 10vw;
  border-radius: 10px;
}

.Toastify__toast-body,
.Toastify__toast-body div:last-child {
  flex-direction: row;
  margin: 0;
}

.Toastify__toast-container {
  width: 85vw;
}

.Toastify__toast-icon {
  width: 20px;
  margin: auto 10px;
}


// Tablet View
@media screen and (min-width: 481px) and (max-width: 768px) {
  .Toastify__toast-container {
    width: 70vw;
  }

  .Toastify__toast {
    margin-left: 0;
  }
}

// Laptop View
@media screen and (min-width: 769px) and (max-width: 1279px) {
  .authBackground,
  .authForm {
      height: calc(100vh - 3.5em);
      width: 50vw;
    }  

  .Toastify__toast-container {
    width: 38vw;
  }

  .Toastify__toast {
    margin-left: 0;
  }
}

// Monitor View
@media screen and (min-width: 1280px) {
  .authBackground,
  .authForm {
    height: calc(100vh - 4.9em);
    width: 50vw;
  }
  
  .Toastify__toast-container {
    width: 25vw;
  }

  .Toastify__toast {
    margin-left: 0;
  }
}

`

