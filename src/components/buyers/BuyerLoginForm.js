import React, { useContext } from "react"
import { useForm } from "react-hook-form";
import { BuyerContext } from "../../context/BuyerContext";
import { useNavigate } from "react-router-dom";
import { StyledBuyerLoginForm } from "../styles/BuyerLoginForm.styled";

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
    <StyledBuyerLoginForm>
      <div>
        <h1>Log In</h1> 
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
                      message: "Email must be valid"
                    }
                  })}/>
            {errors.email && <p>{errors.email.message}</p>}
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"
                  {...register("password", {
                    required: "Password is required"
                    })}/>
            {errors.password && <p>{errors.password.message}</p>}
            <a href="/login">Forgot your password?</a>
            <input type="submit" value="Submit"/>
          </form>
          <button onClick={()=>navigate("/signup")}>Sign up</button>
          <button onClick={()=>navigate("/seller/signup")}>Looking to sell your products?</button>
        </div>
    </StyledBuyerLoginForm>
    </>
  )
}
