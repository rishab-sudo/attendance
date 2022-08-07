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
    <div className="container  d-flex justify-content-center">
    <div className='forgot-subcontainer'>
    <div className="row">
    <div className="col">
      <img src={ForgotPasswordImg} id= "Forgotimg"></img>
     </div>
     

     <div className="col"  id="forgot-formcontainer" >
        
    <ReactRoundedImage 
          className="formImg"
          image={ForgotPasswordImg}
          roundedColor="#321124"
          imageWidth="120"
          imageHeight="120"
          roundedSize="0"
          borderRadius="70"
        />
    <h3>Forgot Password ?</h3>
    <h6>Enter your email address to reset your password </h6>
    <form >
    <div className="mb-3">
    <select class="form-select"  id="ForgotInputfields" aria-label="Floating label select example">
    <option selected>teacher</option>
    <option value="1">student</option>
  </select>
      </div>
   
      <div class="form-floating mb-0">
  <input type="email" class="form-control" id="ForgotInputfields" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
 </div>
    
    <Button id ="SendOTPbtn"variant="primary" type="submit"
      onClick={()=>goToOTP()}>
      Send OTP
      </Button>
    </form>
    </div>
   
   
  
    </div>

    </div>
  </div>
    </>
 )
}

export default ForgotPassword
