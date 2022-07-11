import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
function Login() {
  return (
    <div>
      <form data-testid="login-form">
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email"
            value ={loginCreds.email} 
            onChange = {handleChange} 
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value = {loginCreds.password}
              onChange = {handleChange}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
       </div>
  );
}
export default Login;
