import React, { useContext, useEffect, useState } from 'react';
import { StyledSellerProducts } from '../styles/SellerProducts.styled';
import { ProductContext } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import { PlusLg } from 'react-bootstrap-icons';

const SellerProducts = () => {
  const productContext = useContext(ProductContext);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await productContext.getProductsBySeller(localStorage.getItem("id"))
        setProducts(response.data.sellerProducts)
      } catch (e) {
        console.log(e);
      }

    }
    fetchData();
  },[]) 

  return (
    <StyledSellerProducts>
      <h1>Product Items</h1>
      <button onClick={() => {navigate(`/seller/product/add/`)}}><PlusLg/>Add a New Product</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Unit Cost</th>
            <th>Quantity Available</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td><img src={product.image_url} alt={product.name}/></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.cost}</td>
                <td>{product.quantity_available}</td>
                <td>{product.category.name}</td>
                <td>
                  <button onClick={() => {navigate(`/seller/product/update/${product.id}`)}}>Edit</button>
                  <button onClick={() => {navigate(`/seller/product/delete/${product.id}`)}}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </StyledSellerProducts>
  );
};

export default SellerProducts;