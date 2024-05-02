import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { SellerContext } from "../../context/SellerContext";
import { useNavigate } from "react-router-dom";
import { StyledSellerAuthForm } from "../styles/SellerAuthForm.styled";
import sellerAuthBackground from "../../assets/images/seller-auth.jpeg"
import sellerUploadImage from "../../assets/images/seller-upload-img.png"
import { ExclamationCircle } from "react-bootstrap-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadWidget from "../general/UploadWidget";

export default function SellerSignupForm() {
  
  const sellerContext = useContext(SellerContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState:{errors}, getValues } = useForm();

  const [showFormFieldset, setShowFormFieldset] = useState(false);
  const [accountTaken, setAccountTaken] = useState("");

  const onSubmit = async (data) => {
    if (data){
      setAccountTaken("")
      const response = await sellerContext.createSeller(data);
      if (response) {
        setShowFormFieldset(false);
        // If on second 'signup' page
        if (!showFormFieldset) {
          navigate("/login");
        }
      } else {
        setAccountTaken("Username or Email already taken. Please try again.");
      }
    }
  }

  const notifyIfTaken = () => {
    if (accountTaken) {
      toast.dismiss("accTaken")
      toast.warn(accountTaken, {
        icon: false,
        closeButton: false,
        autoClose: 2000,
        toastId: "accTaken",
      });
    }
  }


  return (
    <>
      <StyledSellerAuthForm>
        <div className="authBackground">
          <img src={sellerAuthBackground} alt="Keycap of Capybara with orange on head" />
        </div>
        <div className="authForm">
          <h1>Become a Capbarter</h1> 
          <form onSubmit={handleSubmit(onSubmit)}>
            {showFormFieldset && 
              <fieldset>
                <div>
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" name="username"
                        {...register("username", {
                          required: "Username is required",
                          minLength: {
                            value: 5,
                            message: "Username must be at least 5 characters"
                          }
                        })}/>
                  {errors.username && <p><ExclamationCircle/>&nbsp;{errors.username.message}</p>}
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" name="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
                            message: "Email must be valid"
                          }
                        })}/>
                  {errors.email && <p><ExclamationCircle/>&nbsp;{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters long"
                          },
                          validate: {
                            hasOneLetter: value => (/^(?=.*[a-zA-Z]).+$/).test(value) || "Password must have at least 1 letter",
                            hasOneDigit: value => (/^(?=.*\d).+$/).test(value) || "Password must have at least 1 digit",
                            hasOneSpecialChar: value => (/^(?=.*[@$!%*?&]).+$/).test(value) || "Password must have at least 1 special character"
                          }
                        })}/>
                  {errors.password && <p><ExclamationCircle/>&nbsp;{errors.password.message}</p>}
                </div>
                <div>
                  <label htmlFor="confirm_password">Confirm Password</label>
                  <input type="password" id="confirm_password" name="confirm_password"
                        {...register("confirm_password",{
                          required: "Password should match",
                          validate: value => value === getValues().password || "Passwords should match"
                          })}/>
                  {errors.confirm_password && <p><ExclamationCircle/>&nbsp;{errors.confirm_password.message}</p>}
                  <ToastContainer/>
                </div>
                <button className="authContinueBtn" onClick={notifyIfTaken}>Continue</button>
              </fieldset>
            }
            {!showFormFieldset && 
              <fieldset>
                <button className="authBackBtn" onClick={()=>{setShowFormFieldset(true)}}>&#171; Back</button>
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name"
                        {...register("name",{
                          required: "Name is required"
                        })}/>
                  {errors.name && <p><ExclamationCircle/>&nbsp;{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="contact">Contact</label>
                  <input type="text" id="contact" name="contact"
                        {...register("contact",{
                          required: "Contact number is required",
                          pattern: {
                            value: /^\+?[\d\s()-]+$/,
                            message: "Contact number must be valid"
                          }
                        })}/>
                  {errors.contact && <p><ExclamationCircle/>&nbsp;{errors.contact.message}</p>}
                </div>
                <div>
                  <label htmlFor="uploadImage">Upload a Profile Image</label>
                  <UploadWidget defaultUploadImage={sellerUploadImage}/>
                </div>
                <input className="authSubmitBtn" type="submit" value="Submit"/>
              </fieldset>
            }
          </form>
          <button className="authRedirectBtn"onClick={()=>navigate("/seller/login")}>Log in</button>
          <button className="authRedirectLink" onClick={()=>navigate("/signup")}>Looking to buy our products?</button>  
        </div>
      </StyledSellerAuthForm>
    </>
  )
}
