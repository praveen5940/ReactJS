import React from "react";
import './regform.css'
import { Link } from "react-router-dom";
export function RegForm(){

  return(
        <>
   <div class="container">
    <form class="login-form">
      <h2>Want to check out this file?Sign up or Log in</h2>
      <h5 className="bg danger">unable to get profile information from Google</h5>
      <input type="text" placeholder="Continue with Google" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
       <button type="submit">Log in</button>
       <h6>Use Single Sign-on</h6>
       <h6>Reset Password</h6>
       <h6>No account?</h6>

     <Link to='/login'><button>Create one</button></Link>
     
    </form>
  </div>
        </>
    );
}