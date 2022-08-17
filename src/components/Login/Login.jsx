import React from 'react';
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom";
import ReactRoundedImage from "react-rounded-image";
import LoginImg from "../../assests/LoginImg.png"

const Login = () => {
  const navigate =useNavigate();
  const goToForgotPassword=()=>{
    navigate("./DashBoard")
  };
  return (
    <> 
      <div className="container" id="login_container">
    <div className="row justify-content-center">
    
    <div className="col" id="loginImg">
    <img src={LoginImg}   id="loginImg"></img>
    </div>
    
    <div className="col" id="form_container" style={{border:"solid",borderColor:"#eeeeee"}}>
       <ReactRoundedImage 
          className="formImg"
          image={LoginImg}
          roundedColor="#321124"
          imageWidth="100"
          imageHeight="100"
          roundedSize="0"
          borderRadius="70"
        />
        <div id="form_heading">
        <h3>Welcome Back!</h3>
        <h6 style={{color:"gray"}}>Login to your account to continue</h6>
        </div>
    <div className="form-floating mb-3">
    <select className="form-select" id="formInputs" aria-label="Floating label select example" style={{paddingTop:"1px"}}>
    <option selected>Teacher</option>
    <option value="1">Student</option>
    </select>
</div>
    <div className="form-floating mb-3">
    <input type="email" class="form-control" id="formInputs" placeholder="name@example.com"/>
    <label for="floatingInput">Email address</label>
  </div>
    <div className="form-floating mb-3">
    <input type="password" class="form-control" id="formInputs" placeholder="Password"/>
    <label for="floatingPassword">Password</label>
  </div>
  
  <div id="chechbox">
  <div className="form-check" >
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{}}/>
  <label className="form-check-label" for="flexCheckDefault" style={{marginLeft:"5px"}}>
    Keep me logged in
  </label>
</div>
<Link to="./ForgotPassword" id="forgot_password_link" >Forgot Password?</Link>
</div>
  <button type="button" className="btn-lg"onClick={goToForgotPassword}
  id="loginbtn">
    Log In
  </button>
  </div> 
    </div>
  
   
  </div>
  
  </>
  )
}

export default Login
  
     
     
  
  
