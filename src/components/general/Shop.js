import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { BagPlusFill } from 'react-bootstrap-icons';
import { StyledShop } from '../styles/Shop.styled';
import { CartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shop = () => {
  const productContext = useContext(ProductContext);
  const cartContext = useContext(CartContext);
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

  const notifyIfValid = (message) => {
    toast.success(message, {
      autoClose: 2000,
    });
  }

  const notifyIfInvalid = (message) => {
    toast.error(message, {
      autoClose: 2000,
      toastId: "invalid" // prevents duplicate
    });
  }

  const handleAddCart = async (productId, productName) => {
    if (localStorage.getItem("loginStatus") && localStorage.getItem("role") === 'buyer') {
      const buyerId = localStorage.getItem("id"); 
      const productData = {
        product_id: productId
      }
      const response = await cartContext.addToCart(buyerId, productData);
      if (response.status == 200) {
        notifyIfValid(`${productName} has been added to the cart.`)
      } else {
        notifyIfInvalid(`${productName} was not added to the cart.`)
      }
    } else {
      notifyIfInvalid("Please login to add item to cart!")
      navigate("/login")
    }
  }

  return (
    <StyledShop>
      {
        products.map(product => (
          <div key={product.id} className="product-container">
            <img src={product.image_url} alt={product.name}/>
            <div>
              <h1>{product.name}</h1>
              <p>${product.price}</p>
              <button onClick={
                ()=>handleAddCart(product.id, product.name)
                }><BagPlusFill/>Add to Cart</button>
            </div>
          </div> 
        ))
      }
    </StyledShop>
  );
};

export default Shop;