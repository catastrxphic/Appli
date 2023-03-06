import { Link } from "react-router-dom";
import './Login.css';


function LogIn() {
  return (
    <div className="Login-page">

      <h1 className="h1_Login" >Welcome Back</h1>
  
          <div className="Login-email">

                <input required className="L-email" type="text"/>  
                <label for="L-email" className="L-label-email">
                  <span class="L-content-email">Email</span>
                </label>
            
          </div>

          <div className="Login-password">

                <input required className="L-password" type="password"/>  
                <label for="L-password" className="L-label-password">
                  <span class="L-content-password">Password</span>
                </label>

          </div>

          <input className="Login_button" type="submit" value="Log In"/>
          <p className="p_Login">Don't have an account? &nbsp; <Link to="/Signup" className="link_LI"> Sign Up.</Link></p>

          <Link to="/" className="linkLI"> To Home </Link>
            
    </div>
  );
}

export default LogIn;

