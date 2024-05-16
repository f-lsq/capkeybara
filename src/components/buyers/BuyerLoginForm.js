import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { StyledBuyerAuthForm } from "../styles/buyers/BuyerAuthForm.styled";
import { ExclamationCircle } from "react-bootstrap-icons";
import buyerAuthBackground from "../../assets/images/main/buyer-auth.webp";
import { notifyError } from '../../utils';
import { AuthContext } from "../../context/AuthContext";
import { BuyerContext } from "../../context/BuyerContext";

export default function BuyerLoginForm() {
  
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const buyerContext = useContext(BuyerContext);
  const { register, handleSubmit, formState:{errors} } = useForm();
  
  const onSubmit = async (data) => {
    try {
      const response = await buyerContext.login(data)
      if (response) {
        const buyerProfileResponse = await buyerContext.getBuyerProfile();
        authContext.login(buyerProfileResponse.data.payload.role);
        navigate("/profile");
      } else {
        notifyError("Wrong email or password", "wrongLogin");
        navigate("/login");
      }
    } catch (e) {
      console.log(e);
    }

  }

  return (
    <>
    <StyledBuyerAuthForm>
      <div className="authBackground">
        <img src={buyerAuthBackground} alt="Keycap of Capybara with orange on head" />
      </div>
      <div className="authForm">
        <h1>Login</h1> 
       
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
          <button className="authRedirectBtn" onClick={()=>navigate("/signup")}>Sign up</button>
          <button className="authRedirectLink" onClick={()=>navigate("/seller/signup")}>Looking to sell your products?</button>
        </div>
    </StyledBuyerAuthForm>
    </>
  )
}
