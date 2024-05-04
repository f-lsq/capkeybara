import React, { useContext, useEffect, useState } from 'react';
import { ExclamationCircle } from 'react-bootstrap-icons';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import UploadWidget from '../general/UploadWidget';
import defaultUploadImage from "../../assets/images/upload-img.jpg"

const SellerAddProduct = () => {

  const productContext = useContext(ProductContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState:{errors} } = useForm({
    defaultValues: {
      image_url: "",
      description: "",
      seller_id: localStorage.getItem("id")
    }
  });
  const [categories, setCategories] = useState([]);
  const [uploadedImageURL, setUploadedImageURL] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await productContext.getAllCategories();
        setCategories(response.data.allCategories);
      } catch (e) {
        console.log(e);
      }

    }
    fetchData();
  },[]) 

  const onSubmit = async (data) => {
    console.log(data);
  }

  return (
    <div>
      <h1>Add product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label htmlFor="name">Product Name</label>
            <input type="text" id="name" name="name" 
                  {...register("name", {
                    required: "Name is required"
                  })}/>
            {errors.name && <p><ExclamationCircle/>&nbsp;{errors.name.message}</p>}
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
            {errors.category_id && <p><ExclamationCircle/>&nbsp;{errors.category_id.message}</p>}
          </div>
          <div>
            <div>
              <label htmlFor="price">Selling Price</label>
              <input type="text" id="price" name="price"
                    {...register("price", {
                      required: "Selling price is required"
                    })}/>
              {errors.price && <p><ExclamationCircle/>&nbsp;{errors.price.message}</p>}
            </div>
            <div>
            <label htmlFor="cost">Cost Price</label>
            <input type="text" id="cost" name="cost"
                  {...register("cost", {
                    required: "Cost price is required"
                  })}/>
            {errors.cost && <p><ExclamationCircle/>&nbsp;{errors.cost.message}</p>}
          </div>
          </div>
          <div>
            <label htmlFor="quantity_available">Quantity In Stock</label>
            <input type="text" id="quantity_available" name="quantity_available" 
                  {...register("quantity_available", {
                    required: "Quantity is required"
                  })}/>
            {errors.quantity_available && <p><ExclamationCircle/>&nbsp;{errors.quantity_available.message}</p>}
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="image_url">Upload a Profile Image</label>
            <input type="hidden" id="image_url" name="image_url"
                    {...register("image_url",{
                    value: uploadedImageURL
                    })}/>
            <img src={uploadedImageURL || defaultUploadImage} alt="Profile to be uploaded by sellers"/>
            <UploadWidget setUploadedImageURL={setUploadedImageURL}/>
          </div>
          <div>
            <label htmlFor="description">Product Name</label>
            <textarea id="description" name="description" 
                  {...register("description")}/>
          </div>
          <div>
            <input type="hidden" id="seller_id" name="seller_id"/>
          </div>
        </div>
        
        <input className="authSubmitBtn" type="submit" value="Add Product"/>
      </form>
    </div>
  );
};

export default SellerAddProduct;