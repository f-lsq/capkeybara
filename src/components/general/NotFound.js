import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledNotFound } from '../styles/general/NotFound.styled';
import notFoundImg from "../../assets/images/main/not-found.webp"

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <StyledNotFound>
      <img src={notFoundImg} />
      <h1>4 0 4</h1>
      <h3>PAGE NOT FOUND</h3>
      <p>The page you are looking for was moved, removed, renamed, or might not exist.</p>
      <button onClick={() => navigate("/")}>Go Home</button>
    </StyledNotFound>
  );
};

export default NotFound;