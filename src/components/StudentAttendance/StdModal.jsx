import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import data from "./StdModalData"
import {render} from 'react-dom';
import {BiSearch} from "react-icons/bi";
import ListGroup from 'react-bootstrap/ListGroup';
function MyVerticallyCenteredModal(props) {
  return (
   
    <Modal className="" style={{borderTopLeftRadius:"50px"}}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
         <div style={{backgroundColor:"#EAF4FF",}}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
         <p style={{fontWeight:"initial",fontSize:"1.3rem"}}>Attendance Detail</p>
         <p style={{fontWeight:"initial",fontSize:"1.1rem"}}>Student Name: Ankita Sharma</p>
         <p style={{fontWeight:"initial",fontSize:"1.1rem"}}>Student ID: 02255</p>
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body style={{borderRadius:"20px",marginLeft:"2rem",marginRight:"2rem",marginBottom:'2rem',marginTop:"2rem",backgroundColor:"white"}}>
     <div  style={{display:"flex"}}>
     <select class="form-select form-select-lg mb-0" 
     aria-label=".form-select-lg example"
     style={{width:"12rem",height:"2.5rem",borderRadius:"15px",fontSize:"1rem",marginRight:"15px"}}>
  <option selected >Select Course</option>
  <option value="1">One</option>
</select>
<select class="form-select form-select-lg mb-0" 
aria-label=".form-select-lg example"
style={{width:"12rem",height:"2.5rem",borderRadius:"15px" ,fontSize:"1rem" ,marginRight:"15px"}}>
  <option selected>Select Class</option>
  <option value="1">One</option>
</select>
<div id="Modalsrch_icon_container">
<BiSearch id="Modalsrch_icon"/>
</div>
</div>


<ListGroup variant="flush">
     <ListGroup.Item>
<div class="container">
     <div class="row align-items-start">
     <div class="col" style={{textAlign:"center",fontSize:"",fontWeight:"",color:"blue",textAlign:"start"}}>
       Subjects
       </div>
       <div class="col" style={{textAlign:"center",fontSize:"",fontWeight:"",color:"blue",textAlign:"end"}}>
      Total Attendance
       </div>

      </div>
      <div className="underline" style={{backgroundColor:"lightGray",width:"114%",marginLeft:"-45px"}}></div>
          </div>
{/* map data */}
{data.map(data => (  
          <div class="container">
     <div class="row align-items-start">
     <div class="col" style={{textAlign:"center",fontSize:"",fontWeight:"",color:"gray",height:"2.5rem",paddingTop:"6px",textAlign:"start"}}>
       {data.Subject}
       </div>
       <div class="col" style={{textAlign:"center",fontSize:"",fontWeight:"",color:"gray" ,height:"2.5rem",paddingTop:"6px",textAlign:"end"}}>
      {data.TotalAttendance}
       </div>

      </div>
      <div className="underline" style={{backgroundColor:"lightGray",width:"114%",marginLeft:"-45px"}}></div>
          </div>

))}   
       </ListGroup.Item>

       
    </ListGroup>
     
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide} >Close</Button>
      </Modal.Footer> */}
    
    </div>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
   
      <b  type="button"variant="light" onClick={() => setModalShow(true)} style={{textDecoration:"none",border:"none",backgroundColor:"none",fontWeight:'initial',width:"100%"}}>
        View Detail
      </b>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
     
    </>
  );
}

// render(<App />);
export default App;