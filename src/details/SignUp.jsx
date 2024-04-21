import React, { useState } from 'react';
import '../styles/signup.css'; // Import signup.css
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
        console.log("Remember Me:", rememberMe);
        // Add your signup logic here
    };

    const submission = async (e) => {
        e.preventDefault();
    
        try {
          const result = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            body: JSON.stringify({
              username,
              email,
              password
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!result.ok) {
            throw new Error('Failed to fetch');
          }
          const res = await result.json();
          console.warn(res);
          localStorage.setItem("user", JSON.stringify(res));
          navigate('/');
        } catch (error) {
          console.error('Error:', error.message);
        }
      }
    

    return (
        <div className="container1"> {/* Use the same container class as signin page */}
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-box">
                    <input 
                        type="email" 
                        placeholder="Email" 
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
                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
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
                </div>
                <button type="submit" className="btn" onClick={submission}>Sign Up</button>
                <div className="signup"> {/* Use the same signup class as signin page */}
                    <p>Already have an account ?<Link to="/signin">Sign In</Link></p>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
