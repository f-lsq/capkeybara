import styled from "styled-components";

export const StyledUploadWidget = styled.button`
// Mobile View
  background: #BE904B;
  border: none;
  margin-top: 0.5rem;
  color: white;
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 0.7rem;
  cursor: pointer;

&:hover {
  background-color: #A87F41;
  transition: 0.5s;
}

// Tablet View
@media screen and (min-width: 481px) and (max-width: 768px) {

}

// Laptop View
@media screen and (min-width: 769px) and (max-width: 1279px) {

}

// Monitor View
@media screen and (min-width: 1280px) {
  
}
`