import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import UploadWidget from '../general/UploadWidget';
import { StyledSellerProductForm } from '../styles/sellers/SellerProductForm.styled';
import { Arrow90degLeft, ExclamationCircle, FloppyFill } from 'react-bootstrap-icons';
import defaultUploadImage from "../../assets/images/main/seller-upload-img.webp"
import { notifySuccess, notifyError } from '../../utils';
import { ProductContext } from '../../context/ProductContext';

const SellerUpdateProduct = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const { productId } = useParams();
  const productContext = useContext(ProductContext);
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({});
  const [uploadedImageURL, setUploadedImageURL] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCategories = await productContext.getAllCategories();
        const responseProducts = await productContext.getProductById(productId);
        setCategories(responseCategories.data.allCategories);
        setProduct(responseProducts.data.existingProduct);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [productId])

  useEffect(() => {
    try {
      // Set default values after product state is updated
      setValue('name', product.name);
      setValue('description', product.description);
      setValue('price', product.price);
      setValue('cost', product.cost);
      setValue('quantity_available', product.quantity_available);
      setUploadedImageURL(product.image_url);
      setValue('category_id', product.category_id);
      setValue('seller_id', product.seller_id);
    } catch (e) {
      console.log(e);
    }
  }, [product]);

  const onSubmit = async (data) => {
    if (data) {
      const response = await productContext.updateProduct(productId, data);
      if (response) {
        notifySuccess(`Product of ID ${productId} has been updated.`, 'updateProductSuccess')
      } else {
        notifyError(`Product of ID ${productId} could not be update as it exist in an active order.`, 'updateProductError')
      }
      navigate("/seller/product");
    } else {
      navigate(`/seller/product/update/${productId}`)
    }
  }

  return (
    <StyledSellerProductForm>
      <h1>Update product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="backSubmitBtn">
          <button type="button" onClick={() => navigate("/seller/product")}><Arrow90degLeft />Cancel</button>
          <button type="submit" className="authSubmitBtn"
            onClick={() => setValue("image_url", uploadedImageURL)}>
            <FloppyFill /> Update Product
          </button>
        </div>
        <div className="formBody">
          <div className="formLeft">
            <div>
              <label htmlFor="name">Product Name</label>
              <input type="text" id="name" name="name"
                {...register("name", {
                  required: "Name is required"
                })} />
              {errors.name && <p><ExclamationCircle />&nbsp;{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <select name="category_id" id="category_id" defaultValue=""
                {...register("category_id", {
                  required: "Select a category",
                })}>
                <option disabled value="">-- Select Category -- </option>
                {
                  categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))
                }
              </select>
              {errors.category_id && <p><ExclamationCircle />&nbsp;{errors.category_id.message}</p>}
            </div>
            <div>
              <div>
                <label htmlFor="price">Selling Price</label>
                <input type="number" id="price" name="price" step=".01"
                  {...register("price", {
                    required: "Selling price is required",
                    min: {
                      value: 0,
                      message: "Selling price should be positive"
                    }
                  })} />
                {errors.price && <p><ExclamationCircle />&nbsp;{errors.price.message}</p>}
              </div>
              <div>
                <label htmlFor="cost">Cost Price</label>
                <input type="number" id="cost" name="cost" step=".01"
                  {...register("cost", {
                    required: "Cost price is required",
                    min: {
                      value: 0,
                      message: "Cost price should be positive"
                    }
                  })} />
                {errors.cost && <p><ExclamationCircle />&nbsp;{errors.cost.message}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="quantity_available">Quantity In Stock</label>
              <input type="number" id="quantity_available" name="quantity_available"
                {...register("quantity_available", {
                  required: "Quantity is required",
                  min: {
                    value: 0,
                    message: "Quantity should be positive"
                  }
                })} />
              {errors.quantity_available && <p><ExclamationCircle />&nbsp;{errors.quantity_available.message}</p>}
            </div>
          </div>
          <div className="formRight">
            <div>
              <label htmlFor="image_url">Upload a Profile Image</label>
              <input type="hidden" id="image_url" name="image_url"
                {...register("image_url", {
                  value: uploadedImageURL
                })} />
              <img src={uploadedImageURL || defaultUploadImage} alt="Product to be uploaded by sellers" />
              <UploadWidget setUploadedImageURL={setUploadedImageURL} />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description"
                {...register("description")} />
            </div>
            <div>
              <input type="hidden" id="seller_id" name="seller_id" />
            </div>
          </div>
        </div>
      </form>
    </StyledSellerProductForm>
  );
};

export default SellerUpdateProduct;