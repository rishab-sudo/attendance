import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import data from "./StdPfModalData"
import {render} from 'react-dom';
import {BiSearch} from "react-icons/bi";
import ListGroup from 'react-bootstrap/ListGroup';
function MyVerticallyCenteredModal(props) {
  return (
   
    <Modal className="" style={{borderRadius:"10px"}}
      {...props}
      size="md"
      
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div style={{backgroundColor:"white",borderRadius:"20px",width:""}}>
      <Modal.Header closeButton style={{height:"15px",marginBottom:"0px"}}>
        <Modal.Title id="contained-modal-title-vcenter" >
        
       
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body >
      <heading style={{fontSize:"1.2rem",color:"gray",marginLeft:'2rem'}}>Student Info</heading>
      {data.map((data) => ( 
        <>
         <div style={{fontSize:"1rem",color:"gray",marginTop:"1rem",marginLeft:"2rem"}}>
         <p > {data.StudentName}</p>
         <p > {data.StudentID}</p>
         <p > {data.Course}</p>
         <p > {data.Semester}</p>
         <p > {data.Class}</p>
      
         </div>
      </>
          ))}  

<div className='underline' style={{backgroundColor:"gray",width:"87%",marginLeft:"2rem"}}></div>
<heading style={{fontSize:"1.2rem",color:"gray",marginLeft:'2rem'}}>Persnol Information</heading>
      {data.map((data) => ( 
        <>
         <div style={{fontSize:"1rem",color:"gray",marginTop:"1rem",marginLeft:"2rem"}}>
         <p > {data.ContactNo}</p>
         <p > {data.Email}</p>
         <p > {data.HomeAddress}</p>
         <p > {data.City}</p>
        
      
         </div>
      </>
          ))}  

<heading style={{fontSize:"1.2rem",color:"gray",marginLeft:'2rem',marginTop:"2rem"}}>Parents Information</heading>
      {data.map((data) => ( 
        <>
         <div style={{fontSize:"1rem",color:"gray",marginTop:"1rem",marginLeft:"2rem"}}>
         <p > {data.FathersName}</p>
         <p > {data.EmailAddress}</p>
         <p > {data.ContactNumber}</p>
         <p > {data.Cityy}</p>
        
      
         </div>
      </>
          ))} 
      </Modal.Body>
      </div>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
   
      <b  type="button"variant="light" onClick={() => setModalShow(true)} style={{textDecoration:"none",border:"none",backgroundColor:"none",fontWeight:'initial',width:"100%"}}>
        View Info
      </b>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
     
    </>
  );
}
export default App;

// render(<App />);
       
