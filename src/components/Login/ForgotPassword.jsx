import React from 'react'
import "../../App.css"
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import ForgotPasswordImg from "../../assests/ForgotPasswordImg.png"
import ReactRoundedImage from "react-rounded-image";
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
import {useNavigate} from "react-router-dom";


const ForgotPassword = () => {
    const navigate =useNavigate();
    const goToOTP=()=>{
      navigate("/OTP")
    };
  return (
    <>
    <div className="container">
    <div className='row  justify-content-center'>
    
    <div className="col" id="Forgotimg">
      <img src={ForgotPasswordImg} id= "Forgotimg"></img>
     </div>
     

     <div className="col"  id="forgot_formcontainer" style={{border:"solid",borderColor:"#eeeeee"}}>
    <ReactRoundedImage 
          className="formImg"
          image={ForgotPasswordImg}
          roundedColor="#321124"
          imageWidth="120"
          imageHeight="120"
          roundedSize="0"
          borderRadius="70"
        />
  <div id="forgotform_heading">
    <h3>Forgot Password ?</h3>
    <h6 style={{color:"gray"}}>Enter your email address to reset your password </h6>
  </div>
        
    <form >
    <div className="form-floating mb-3">
    <select class="form-select"  id="ForgotInputfields" aria-label="Floating label select example" style={{paddingTop:"1px"}}>
    <option selected>teacher</option>
    <option value="1">student</option>
  </select>
      </div>
   
    <div className="form-floating mb-3">
      <input type="email" class="form-control" id="ForgotInputfields" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
   </div>
    
    <button type="button" className="btn-lg"onClick={goToOTP}
     id="sendotp_btn">
     Send OTP
    </button>
  </form>
   </div>
   
    </div>

  </div>
    </>
 )
}
export default ForgotPassword
   
  
   

