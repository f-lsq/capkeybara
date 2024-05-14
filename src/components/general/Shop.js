import React, { useContext, useEffect, useState } from 'react';
import { StyledShop } from '../styles/general/Shop.styled';
import { BagPlusFill } from 'react-bootstrap-icons';
import { notifySuccess, notifyError } from '../../utils';
import { AuthContext } from '../../context/AuthContext';
import { BuyerContext } from '../../context/BuyerContext';
import { CartContext } from '../../context/CartContext';
import { ProductContext } from '../../context/ProductContext';
import { StyledShopSidebar } from '../styles/general/ShopSidebar.styled';

const Shop = () => {
  
  const authContext = useContext(AuthContext);
  const buyerContext = useContext(BuyerContext);
  const cartContext = useContext(CartContext);
  const productContext = useContext(ProductContext);
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
  }, [])

  const handleAddCart = async (productId, productName) => {
    try {
      if (authContext.isAuthenticatedBuyer()) {
        const buyerId = await buyerContext.getBuyerId();
        const productData = {
          product_id: productId
        }
        const response = await cartContext.addToCart(buyerId, productData);
        if (response) {
          notifySuccess(`${productName} has been added to the cart.`)
        } else {
          notifyError(`No more stock for ${productName}!`, 'addToCartError')
        }
      } else {
        notifyError(`Please login to add products to your cart`, 'unauthorisedBuyer')  
      }
    } catch (e) {
      notifyError(`Please login to add products to your cart`, 'unauthorisedBuyer')
      console.log(e);
    }
    
  }

  return (
    <>
      <StyledShopSidebar>
        
      </StyledShopSidebar>
      <StyledShop>
        {
          products.map(product => (
            <article key={product.id}>
              <img src={product.image_url} alt={product.name} />
              <section>
                <div>
                  <h1>{product.name}</h1>
                  <p>{product.category.name}</p>
                </div>
                <div>
                  <h2>${product.price}</h2>
                  <button onClick={
                    () => handleAddCart(product.id, product.name)
                  }><BagPlusFill />Add to Cart</button>
                </div>

              </section>
            </article>
          ))
        }
      </StyledShop>
    </>
    
  );
};

export default Shop;