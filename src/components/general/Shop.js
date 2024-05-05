import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { BagPlusFill } from 'react-bootstrap-icons';
import { StyledShop } from '../styles/Shop.styled';

const Shop = () => {
  const productContext = useContext(ProductContext);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await productContext.getAllProduct()
        setProducts(response.data.allProducts)
      } catch (e) {
        console.log(e);
      }

    }
    fetchData();
  },[]) 

  const handleAddCart = (productId) => {

  }

  return (
    <StyledShop>
      {
        products.map(product => (
          <div class="product-container">
            <img src={product.image_url} alt={product.name}/>
            <div>
              <h1>{product.name}</h1>
              <p>${product.price}</p>
              <button onClick={()=>handleAddCart(product.id)}><BagPlusFill/>Add to Cart</button>
            </div>
          </div> 
        ))
      }
    </StyledShop>
  );
};

export default Shop;