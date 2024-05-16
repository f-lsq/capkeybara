import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledSellerProducts } from '../styles/sellers/SellerTables.styled';
import { Pencil, PlusLg, TrashFill } from 'react-bootstrap-icons';
import { ProductContext } from '../../context/ProductContext';
import { SellerContext } from '../../context/SellerContext';
import sellerProductsEmptyBackground from "../../assets/images/main/seller-products-empty.webp"
import { StyledSellerPopup } from '../styles/sellers/SellerPopup.styled';

const SellerProducts = () => {
  const navigate = useNavigate();
  const productContext = useContext(ProductContext);
  const sellerContext = useContext(SellerContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sellerId = await sellerContext.getSellerId();
        const response = await productContext.getProductsBySeller(sellerId)
        setProducts(response.data.sellerProducts)
      } catch (e) {
        console.log(e);
      }

    }
    fetchData();
  }, [])

  return (
    <StyledSellerProducts>
      {products.length !== 0 ?
        <>
          <div className='seller-standard-table-view'>
            <div>
              <h1>Product Items</h1>
              <button onClick={() => { navigate(`/seller/product/add/`) }}><PlusLg />Add a New Product</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
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
                      <td className='seller-product-name-col'>
                        <img className="seller-product-img" src={product.image_url} alt={product.name} />
                        <p>{product.name}</p>
                      </td>
                      <td className='seller-right-align-col'>{(product.price).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}</td>
                      <td className='seller-right-align-col'>{(product.cost).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}</td>
                      <td className='seller-right-align-col'>{product.quantity_available}</td>
                      <td>{product.category.name}</td>
                      <td className='seller-actions-col'>
                        <button onClick={() => { navigate(`/seller/product/update/${product.id}`) }}><Pencil /></button>
                        <button onClick={() => { navigate(`/seller/product/delete/${product.id}`) }}><TrashFill /></button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </> :
        <StyledSellerPopup>
          <h1>No Products Found</h1>
          <p>Get Started by adding a product.</p>
          <img src={sellerProductsEmptyBackground} alt="Capybara with monocle, tophat and bowtie, posing like the distinguised gentleman that he is" />
          <button onClick={() => { navigate(`/seller/product/add/`) }}>Add Your First Product!</button>
        </StyledSellerPopup>}

    </StyledSellerProducts>
  );
};

export default SellerProducts;