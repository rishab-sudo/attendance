import React,{useState} from 'react'
import"../../App.css"
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import OTPimg from "../../assests/OTPimg.png"
import ReactRoundedImage from "react-rounded-image";
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import OTPInput, { ResendOTP } from "otp-input-react";


const OTP = () => {
    const [OTP, setOTP] = useState("");

    const navigate =useNavigate();
    const goToNewPassword=()=>{
      navigate("/NewPassword")
    };
  return (
    <>
    <div className="container">
    <div id='OTP-subcontainer'>
    <div className="row">
    <div className="col">
       <img src={OTPimg} id="OTPimg"></img>
  </div>
   
  <div className="col" id='OTP-Form'>
      
        <div >
    <ReactRoundedImage 
          className="formImg"
          image={OTPimg}
          roundedColor="#321124"
          imageWidth="120"
          imageHeight="120"
          roundedSize="1"
          borderRadius="70"
        />
        <br></br>
    <h3>OTP Verification</h3>
    <h6>Enter the OTP sent to your email address<br></br>
    teachers@gmail.com to reset your password</h6>
   
    <OTPInput
    style={{width:"20px"}}
    value={OTP}
      onChange={setOTP}
      autoFocus
      OTPLength={4}
      otpType="number"
      disabled={false}
      secure
    />
    <br></br>
   
    <Link to ="/" id="resendOtpbtn">resend OTP</Link>
    {/* <ResendOTP handelResendClick={() => console.log("Resend clicked")} /> */}
    <br></br>
    <Button id ="ConfirmOTPbtn"variant="primary" type="submit"
      onClick={()=>goToNewPassword()}>
      Confirm OTP
      </Button>
   
    </div>
  
   </div>
    </div>

  </div>
    </div>
    </>

  )
}

export default OTP
