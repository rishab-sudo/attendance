import React from 'react'
import "../../App.css"
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import ResetPasswordImg from "../../assests/ResetPasswordImg.png"
import ReactRoundedImage from "react-rounded-image";
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";


const DashBoard = () => {
    const navigate =useNavigate();
    const goToLogin=()=>{
      navigate("/")
    };
  return (
    <>
    <div className="container ">
    <div className='forgot-subcontainer'>
    <div className="row">
  <div className="col">
      <img src={ResetPasswordImg}id="resetimg"></img>
   </div>
   
   <div className="col" id="reset-formcontainer">
      <Container  >
        <div id='reset-Form'>
    <ReactRoundedImage 
          className="formImg"
          image={ResetPasswordImg}
          roundedColor="#321124"
          imageWidth="120"
          imageHeight="120"
          roundedSize="1"
          borderRadius="70"
        />
    <h3>Reset Password </h3>
    <h6>Enter your password and login into your account</h6>
    <Form style={{width:"350px",height:"450px"}}>
   
    <div class="form-floating">
  <input type="password" class="form-control" id="ResetInputfields" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
      
      
      <div class="form-floating">
  <input type="password" class="form-control" id="ResetInputfields" placeholder="Confirm Password"/>
  <label for="floatingPassword">Confirm Password</label>
</div>
     
    
    <Button id ="confirmPasswordBtn"variant="primary" type="submit" 
      onClick={()=>goToLogin()}>
     Confirm Password
      </Button>
    </Form>
    </div>
    </Container>
  
    </div>
    </div>

  </div>

  
    </div>
    </>

  )
}

export default DashBoard
