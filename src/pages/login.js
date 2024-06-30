import react, { useState } from "react";
import {signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "./firebase";
import {toast} from "react-toastify"

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handlesubmit= async(e)=>{
    e.preventDefault();
    try{
        await signInWithEmailAndPassword(auth, Email, Password);
        console.log("successfully loggedIn")
        toast.success("LoggedIn Successfully!!");
        window.location.href="/profile"


    }catch(error){
        toast.error(error.message);

    }
  }
  return (
    <div className="App">
    <div className="auth-wrapper">

    
    <div className="login-container">
    <form onSubmit={handlesubmit}>
      <h1>Login</h1>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
            Login
        </button>

      </div>
      <p className="forgot-password text-right">
        New user <a href="/register">Register Here</a>
      </p>
    </form>
    </div>
    </div>
    </div>
  );
}
export default Login;