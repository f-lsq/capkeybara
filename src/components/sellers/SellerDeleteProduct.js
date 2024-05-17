import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { StyledSellerDeletePopup } from '../styles/sellers/SellerPopup.styled';
import { notifySuccess, notifyError } from '../../utils';
import { ProductContext } from '../../context/ProductContext';

const SellerDeleteProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const productContext = useContext(ProductContext)
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
  }, [])

  const handleDelete = async (productName) => {
    const response = await productContext.deleteProduct(productId);
    if (response) {
      notifySuccess(`Product ${productName} has been deleted.`, 'deleteProductSuccess')
    } else {
      notifyError(`Product ${productName} could not be delete as it exist in an active order.`, 'deleteProductError')
    }
    navigate("/seller/product/");
  }

  return (
    <StyledSellerDeletePopup>
      <h1>Are you sure?</h1>
      <p>You are about to delete {product.name}</p>
      <img src={product.image_url} alt={product.name} />
      <div>
        <button onClick={() => handleDelete(product.name)}>
          Yes, delete the product
        </button>
        <button onClick={() => {
          navigate("/seller/product/")
        }}>
          No, please cancel this
        </button>
      </div>
    </StyledSellerDeletePopup>
  );
};

export default SellerDeleteProduct;