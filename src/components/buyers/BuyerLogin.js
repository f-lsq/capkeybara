export default function BuyerLogin() {
  return (
    <>
      <h1>Log In</h1> 
      <form>
        <label for="email">Email</label>
        <input type="text" id="email" name="email"/>
        <label for="password">Password</label>
        <input type="text" id="password" name="password"/>
        <input type="submit" value="Submit"/>
      </form>
      <a href="/signup">Sign up</a>
      <a href="/seller/signup">Looking to sell your products?</a>
    </>
  )
}
