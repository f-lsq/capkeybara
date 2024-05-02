import styled from "styled-components";
import UploadWidget from "../general/UploadWidget";

export const StyledUploadWidget = styled.div`
// Mobile View

button {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
}

button img {
  aspect-ratio: 1 / 1;
  object-fit: contain;
  width: 80px;
  border-radius: 50%;
}

button span {
  border-radius: 3px;
  font-size: 0.8em;
  padding: 0.3rem 0.5rem;
  color: white;
  background-color: #BE904B;
  margin: 10px 0;
}

button span:hover {
  background-color: #B58948;
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