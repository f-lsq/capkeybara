import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { StyledBuyerAuthForm } from "../styles/buyers/BuyerAuthForm.styled";
import { ExclamationCircle } from "react-bootstrap-icons";
import buyerAuthBackground from "../../assets/images/main/buyer-auth.webp"
import { notifyError, notifySuccess } from '../../utils';
import { BuyerContext } from "../../context/BuyerContext";

export default function BuyerSignupForm() {
  
  const buyerContext = useContext(BuyerContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState:{errors}, getValues } = useForm();

  const [showFormFieldset, setShowFormFieldset] = useState(true);
  const [accountTaken, setAccountTaken] = useState("");

  const onSubmit = async (data) => {
    if (data){
      setAccountTaken("")
      const response = await buyerContext.createBuyer(data);
      if (response) {
        setShowFormFieldset(false);
        // If on second 'signup' page
        if (!showFormFieldset) {
          notifySuccess(`Account has been created for @${data.username}!`, "signupSuccess");
          navigate("/login");
        }
      } else {
        setAccountTaken("Username or Email already taken. Please try again.");
      }
    }
  }

  const notifyIfTaken = () => {
    if (accountTaken) {
      notifyError(accountTaken, "accountTaken");
    }
  }


  return (
    <>
      <StyledBuyerAuthForm>
        <div className="authBackground">
          <img src={buyerAuthBackground} alt="Keycap of Capybara with orange on head" />
        </div>
        <div className="authForm">
          <h1>Sign Up</h1> 
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
                </div>
                <button className="authContinueBtn" onClick={notifyIfTaken}>Continue</button>
              </fieldset>
            }
            {!showFormFieldset && 
              <fieldset>
                <button className="authBackBtn" onClick={()=>{setShowFormFieldset(true)}}>&#171; Back</button>
                <div>
                  <label htmlFor="first_name">First Name</label>
                  <input type="text" id="first_name" name="first_name"
                        {...register("first_name",{
                          required: "First name is required"
                        })}/>
                  {errors.first_name && <p><ExclamationCircle/>&nbsp;{errors.first_name.message}</p>}
                </div>
                <div>
                  <label htmlFor="last_name">Last Name</label>
                  <input type="text" id="last_name" name="last_name"
                        {...register("last_name",{
                          required: "Last name is required"
                        })}/>
                  {errors.last_name && <p><ExclamationCircle/>&nbsp;{errors.last_name.message}</p>}
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
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" name="address"
                        {...register("address",{
                          required: "Address is required"
                        })}/>
                  {errors.address && <p><ExclamationCircle/>&nbsp;{errors.address.message}</p>}
                </div>
                <input className="authSubmitBtn" type="submit" value="Submit"/>
              </fieldset>
            }
          </form>
          <button className="authRedirectBtn"onClick={()=>navigate("/login")}>Log in</button>
          <button className="authRedirectLink" onClick={()=>navigate("/seller/signup")}>Looking to sell your products?</button>  
        </div>
      </StyledBuyerAuthForm>
    </>
  )
}
