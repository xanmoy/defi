import React, { useState } from "react";
import "../styles/signin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    // Here you can add your authentication logic, like making an API call
  };
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      navigate('/')
    }
   })
   
   const handleLogin = async () => {
    console.warn("email,password:", email, password);
    let result = await fetch('http://localhost:5000/signin', {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result=await result.json()
    console.warn(result)
    if(result.name){
        localStorage.setItem("user",JSON.stringify(result))

        navigate('/')
    }else{
        alert('please enter correct details')
    }

  };

  return (
    <div className="container1">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit" className="btn" onClick={handleLogin}>
          Sign In
        </button>
        <div className="signup">
          <p>
            Don't have an account ?<Link to="/signup">Sign UP</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
