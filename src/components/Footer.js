import "./compStyle/footer.css"


import { Container, Row, Col } from "react-bootstrap";


import navIcon1 from "../assests/img/nav-icon1.svg";
import navIcon2 from "../assests/img/nav-icon2.svg";
import navIcon3 from "../assests/img/nav-icon3.svg";

function Footer  () {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <h1>LOGO</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mahnoor-tariq-021249214/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/mahnoor.tariq.1401/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/the_sidd_art?igsh=MTdzOTZ5ZmkzcHR4ZA=="><img src={navIcon3} alt="Icon" /></a>
            </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer