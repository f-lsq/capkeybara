import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

const SellerDeleteProduct = () => {
  const navigate = useNavigate();
  const productContext = useContext(ProductContext)
  const { productId } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await productContext.getProductById(productId)
        setProduct(response.data.existingProduct);
      } catch (e) {
        console.log(e);
      }

    }
    fetchData();
  },[]) 

  return (
    <div>
      <h1>Are you sure?</h1>
      <p>You are about to delete {product.name}</p>
      <img src={product.image_url} alt={product.name}/>
      <div>
        <button onClick={()=>{
          productContext.deleteProduct(productId);
          navigate("/seller/product/")}}>
          Yes
        </button>
        <button onClick={()=>{
          navigate("/seller/product/")
        }}>
          No
        </button>
      </div>
    </div>
  );
};

export default SellerDeleteProduct;