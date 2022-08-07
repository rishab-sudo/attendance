import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import { BiQrScan } from "react-icons/bi";
import{FaShareAlt} from "react-icons/fa";
import{FaEnvelope} from "react-icons/fa";
import {FaPhoneAlt} from "react-icons/fa";
import {FaClock} from "react-icons/fa";
import logout from "../../assests/logout.png"
import notification from "../../assests/notification.png"

const Cards = () => {
  // const [searchInput, setSearchInput] = useState("");
  // const countries = [
  //   { name: "Belgium", continent: "Europe" },
  //   { name: "India", continent: "Asia" },
  //   { name: "Bolivia", continent: "South America" },
  //   { name: "Ghana", continent: "Africa" },
  //   { name: "Japan", continent: "Asia" },
  // ];
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchInput(e.target.value);
  // };
  // if (searchInput.length > 0) {
  //     countries.filter((country) => {
  //     return country.name.match(searchInput);
  // });
  // }

  return (
    <>

<div  id="header" style={{width:""}}>
    
<div class="d-flex justify-content-end" id="header-icons">
     <input
    id= "search-bar"
   type="search"
   placeholder= "   Search by roll no."
   onChange={""}
   value={""} 
   />
   <img src={notification} id="notification-icon" />    
   <img src={logout} id="logout-icon"/>
  </div>
 
</div> 


<div id="DashBoard">
<Container id='maincard'>
  <Row>
    <Col >
    <div className="card text-white " style={{width: "342px", height: "242px" }} id="cards">
        <div className="card-body">
            <h5 className="card-title">300</h5>
            <p className="card-text">
              Registered Students <br></br>
              Description text
            </p>
          </div>
        </div>
    </Col>
    
    <Col >
      
    <div className="card text-white  mb-0" style={{ width: "342px", height: "242px" }} id="cards">
         
          <div className="card-body">
            <h5 className="card-title">250</h5>
            <p className="card-text">
              Active Students<br></br>
              Description text
            </p>
          </div>
        </div>
    </Col>
   
    <Col >
    <div className="card text-white mb-0" style={{ width: "342px", height: "242px" }} id="cards">
         
          <div className="card-body">
            <h5 className="card-title">180</h5>
            <p className="card-text">
              Present Today<br></br>
              Description text
            </p>
          </div>
        </div>
     
    </Col>
  </Row>
</Container>

     
<Container id="D-form-container">
          <div className="qr-box">
            <p id="QRtext">  <BiQrScan id="QRicon"/>Generate QR
            <FaShareAlt id="shareicon"/></p>
            <div className="underline"> 
            </div>
        
  <Row>
            <Col>
              <label for="Semester" id="lables">Enter Semester</label>
              <input type="text" className="form-control" placeholder="Semester 1" aria-label="First name" id="form-Control" />
              <label for="Course" id="lables">Enter Course</label>
              <input type="text" className="form-control" placeholder="B.Tech" aria-label="First name" id="form-Control" />
              <label for="Class" id="lables">Enter Class</label>
              <input type="text" className="form-control" placeholder="CSE-II" aria-label="First name" id="form-Control" />
            </Col>
            <div className="col">
              <label for="Lecture" id="lables">Enter Lecture</label>
              <input type="text" className="form-control" placeholder="Physics-1" aria-label="Last name" id="form-Control" />
              <label for="Faculty" id="lables">Enter Faculty Name</label>
              <input type="text" className="form-control" placeholder="Sangeet Das" aria-label="Last name" id="form-Control" />
              <label for="Time" id="lables">Enter Time Slot</label>
              <input type="text" className="form-control" placeholder="9:00AM-11:00Am" aria-label="Last name" id="form-Control" />
            </div>
            <button className='QRbtn'>Generate QR</button>
          </Row>
          </div>
          </Container>

{/* <Container id="table-container">
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody >
    
    <tr >
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr id="tr2">
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
      <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      </tr>
    </tbody>
   </table>
</Container> */}
<Container id="contact-container">
<Row>
  <div className="contact-heading-box">
  <p id="heading"> <FaPhoneAlt id="phonicon"/> Contact Us! </p>
  <div className="underline"></div>
  </div>
  <Col>
<div id="contact-form">
             <label for="Name" id="lables">Name</label>
              <input type="text" className="form-control" placeholder="Name" aria-label="First name" id="form-Control" />
              <label for="email" id="lables">Email ID</label>
              <input type="email" className="form-control" placeholder="Email ID" aria-label="First name" id="form-Control" />
              <label for="message" id="lables">Message</label>
               <input type="text" className="form-control" placeholder="Message" aria-label="First name" id="form-Control-mssg" />
              
       </div>
    </Col>

  <Col>
  <div class="card" id="contact-card" style={{width: "380px", height:"300px"}}>
  <div className="card-body">
    <h5 className="card-title">Contact Info</h5>
    <div id="underline"></div>
    <div id="card-text">
    <a href = "mailto:" style={{color:"white"}}>
    <p id="card-text"> <FaEnvelope id="mailicon"/>admin@gmail.com</p>
    </a>
    <a href="tel:+6494461709" style={{color:"white"}}>
    <p id="card-text"><FaPhoneAlt id="phonicon" style={{color:"white"}}/>9876543210</p>
    </a>
    <p id="card-text"><FaClock id="clockicon"/>09:00am-15:00pm</p>
    </div>
  </div>
</div>
  </Col>
</Row>
  </Container>
  </div>
    </>
  )
}

export default Cards
