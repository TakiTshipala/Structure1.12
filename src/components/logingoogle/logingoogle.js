import React, { Component } from 'react';
// import "../Logintest.scss";
// import Close from "../images/close.png";

export default class Login extends Component {
    render() {
        return (
            <div>
            
                <div class="parent">
  <div class="left">
</div>
  <div class="right">
    <div class="container">
    <ul class="first">
      <li><h3>Login with Google</h3></li>
      <li><a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i> Login with Facebook</a></li>
      <li><a href="#"><i class="fa fa-google" aria-hidden="true"></i>
 Login with Google</a></li>
      <li>OR</li>
    </ul>
    <form>
      <div class="form">
        <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
        <a class="forget" href="#">Forget Password?</a>
      </div>
    </form>
    
    <ul>
      <li><button>login</button></li>
      <li><p><span>Are you a new user? </span><a href="/register">Signup here</a></p></li>
    </ul>
    
  </div>
  </div>
</div>
</div>
          
        )
    }
}
