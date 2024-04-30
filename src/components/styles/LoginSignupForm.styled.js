import styled from "styled-components";


export const StyledLoginSignupForm = styled.div`
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
  margin: 5%; 0
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

input {
  border: 1px solid #CCE2D3;
  padding: 0 3%;
  margin: 2% 0 0.8rem 0;
}

input:focus {
  outline: none;
}

.authSubmitBtn {
  width: 100%;
  background: #26291E;
  color: #FFFFFF;
  border: 1px solid #CCE2D3;
}

input,
.authSubmitBtn,
button {
  height: 40px;
  border-radius: 2px;
}

.authSubmitBtn,
button {
  cursor: pointer;
  margin-top: 3%;
}

button:first-of-type {
  background: none;
  border: 1px solid #26291E;
}

button:last-of-type {
  background: none;
  border: none;
  text-decoration: underline;
  color: #CC884A;
}

button:last-of-type:hover {
  color: #F18D31;
  transition: 0.5s;
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

