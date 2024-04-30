import React, { useContext } from "react"
import { useForm } from "react-hook-form";
import { BuyerContext } from "../../context/BuyerContext";
import { useNavigate } from "react-router-dom";
import { StyledLoginSignupForm } from "../styles/LoginSignupForm.styled";
import buyerAuthBackground from "../../assets/images/buyer-auth.jpeg"
import { ExclamationCircle } from "react-bootstrap-icons";

export default function BuyerLoginForm() {
  
  const buyerContext = useContext(BuyerContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState:{errors} } = useForm();
  
  const onSubmit = async (data) => {
      const response = await buyerContext.login(data)
      if (response) {
        navigate("/profile");
      } else {
        navigate("/login");
      }
  }
  return (
    <>
    <StyledLoginSignupForm>
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
          <button onClick={()=>navigate("/signup")}>Sign up</button>
          <button onClick={()=>navigate("/seller/signup")}>Looking to sell your products?</button>
        </div>
    </StyledLoginSignupForm>
    </>
  )
}
