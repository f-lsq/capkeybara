import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { BagPlusFill } from 'react-bootstrap-icons';
import { StyledShop } from '../styles/general/Shop.styled';
import { CartContext } from '../../context/CartContext';
import { notifySuccess, notifyError } from '../../utils';

const Shop = () => {
  const productContext = useContext(ProductContext);
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await productContext.getAllProduct()
        console.log(response.data.allProducts)
        setProducts(response.data.allProducts)
      } catch (e) {
        console.log(e);
      }

    }
    fetchData();
  },[]) 

  const handleAddCart = async (productId, productName) => {
    const buyerId = localStorage.getItem("id"); 
    const productData = {
      product_id: productId
    }
    const response = await cartContext.addToCart(buyerId, productData);
    if (response.status === 200) {
      notifySuccess(`${productName} has been added to the cart.`)
    } else {
      notifyError(`${productName} was not added to the cart.`)
    }
  }

  return (
    <StyledShop>
      {
        products.map(product => (
          <article key={product.id}>
            <img src={product.image_url} alt={product.name}/>
            <section>
              <div>
                <h1>{product.name}</h1>
                <p>{product.category.name}</p>
              </div>
              <div>
                <h2>${product.price}</h2>
                <button onClick={
                  ()=>handleAddCart(product.id, product.name)
                  }><BagPlusFill/>Add to Cart</button>
              </div>
              
            </section>
          </article> 
        ))
      }
    </StyledShop>
  );
};

export default Shop;