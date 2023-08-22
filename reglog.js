 import React from "react";
 import "./reglog.css";
export function Reglog(){
     return(
        <>
        <div className="col-lg-6 reglog">
         <form class="login-form col-lg-6">
   <input type="email" class="login-username" autofocus="true" required="true" placeholder="Email" />
   <input type="password" class="login-password" required="true" placeholder="Password" />
   <input type="submit" name="Login" value="Login" class="login-submit" />
 </form>
 <a href="#" class="login-forgot-pass">forgot password?</a>
 </div>
         </>
     );
 }