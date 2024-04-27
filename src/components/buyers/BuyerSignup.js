export default function BuyerSignup() {
  return (
    <>
      <h1>Sign Up</h1> 
      <form>
        <label for="username">Username</label>
        <input type="text" id="username" name="username"/>
        <label for="email">Email</label>
        <input type="text" id="email" name="email"/>
        <label for="password">Password</label>
        <input type="text" id="password" name="password"/>
        <input type="submit" value="Submit"/>
      </form>
      <a href="/login">Log in</a>
      <a href="/seller/signup">Looking to sell your products?</a>
    </>
  )
}
