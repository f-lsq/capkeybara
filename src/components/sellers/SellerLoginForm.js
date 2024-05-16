import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { StyledSellerAuthForm } from "../styles/sellers/SellerAuthForm.styled";
import { ExclamationCircle } from "react-bootstrap-icons";
import sellerAuthBackground from "../../assets/images/main/seller-auth.webp";
import { notifyError } from '../../utils';
import { AuthContext } from "../../context/AuthContext";
import { SellerContext } from "../../context/SellerContext";

export default function SellerLoginForm() {
  
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const sellerContext = useContext(SellerContext);
  const { register, handleSubmit, formState:{errors} } = useForm();
  
  const onSubmit = async (data) => {
    try {
      
      const response = await sellerContext.login(data)
      if (response) {
        const sellerProfileResponse = await sellerContext.getSellerProfile();
        authContext.login(sellerProfileResponse.data.payload.role);
        navigate("/seller/product");
      } else {
        notifyError("Wrong email or password", "wrongLogin");
        navigate("/seller/login");
      }
    } catch(e) {
      console.log(e);
    }
  }
  return (
    <>
    <StyledSellerAuthForm>
      <div className="authBackground">
        <img src={sellerAuthBackground} alt="Keycap of Capybara with orange on head" />
      </div>
      <div className="authForm">
        <h1>Welcome back, Sellers!</h1> 
          <form onSubmit={handleSubmit(onSubmit)}>
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
                      required: "Password is required"
                      })}/>
              {errors.password && <p><ExclamationCircle/>&nbsp;{errors.password.message}</p>}
              <a href="/login">Forgot your password?</a>
            </div>
            <input className="authSubmitBtn" type="submit" value="Log in"/>
          </form>
          <button className="authRedirectBtn" onClick={()=>navigate("/seller/signup")}>Sign up</button>
          <button className="authRedirectLink" onClick={()=>navigate("/signup")}>Looking to buy our products?</button>
        </div>
    </StyledSellerAuthForm>
    </>
  )
}
