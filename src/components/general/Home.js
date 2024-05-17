import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledHome } from '../styles/general/Home.styled';
import { BagPlusFill, PlusSquareFill } from 'react-bootstrap-icons';
import landingHover from '../../assets/images/main/landing-hover.webp';
import landingMain from '../../assets/images/main/landing-main.webp';
import loadingScreen from '../../assets/images/main/loading.gif';
import { notifySuccess, notifyError, mergeSort } from '../../utils';
import { AuthContext } from '../../context/AuthContext';
import { BuyerContext } from '../../context/BuyerContext';
import { CartContext } from '../../context/CartContext';
import { ProductContext } from '../../context/ProductContext';

const Home = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const buyerContext = useContext(BuyerContext);
  const cartContext = useContext(CartContext);
  const productContext = useContext(ProductContext);
  const [recommendKeyboards, setRecommendKeyboards] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await productContext.getAllProduct()
        const allProducts = response.data.allProducts
        let allKeyboards = [];
        allProducts.forEach((product) => {
          if (product.category_id === 1) {
            allKeyboards.push(product)
          }
        })
        const allKeyboardsSorted = mergeSort(allKeyboards).reverse();
        setRecommendKeyboards(allKeyboardsSorted);
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
    <StyledHome>
      {recommendKeyboards ?
        <>
          <figure>
            <figcaption>
              <h1>Looking for the <span>BEST</span> keyboard?</h1>
            </figcaption>
            <img src={landingMain} alt="Keyboard of various variant of green"></img>
            <img onClick={() => handleAddCart(9, "Macha Keys")} src={landingHover}
              alt="Keyboard of various variant of green"></img>
            <div>
              <PlusSquareFill />
              <p>Add to Cart</p>
            </div>
          </figure>
          <section id="cta-buttons">
            <button onClick={() => { navigate(`/shop`) }}>Browse Keyboard</button>
            <button onClick={() => { navigate(`/build`) }}>Build a Keyboard</button>
          </section>
          <section id="recommendation">
            <h1>Top Recommended Keyboards</h1>
            {
              recommendKeyboards.slice(0, 3).map(recommendKeyboard => (
                <article key={recommendKeyboard.id}>
                  <img src={recommendKeyboard.image_url} alt={recommendKeyboard.name} />
                  <section>
                    <h2>{recommendKeyboard.name}</h2>
                    <h2>${recommendKeyboard.price}</h2>
                    <button onClick={
                      () => handleAddCart(recommendKeyboard.id, recommendKeyboard.name)
                    }><BagPlusFill />Add to Cart</button>
                  </section>
                </article>
              ))
            }
          </section>
        </>
        :
        <div className="loading-screen">
          <img src={loadingScreen} alt="Loading screen showing a capybara sleeping peacefully beside a flower" />
          <h1>Loading...</h1>
        </div>
      }
    </StyledHome>
  );
};

export default Home;