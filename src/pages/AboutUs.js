import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./pagescss/AboutUs.css";
function About() {
  return (
    <div className="about-section">
        <divider></divider>
      <h1>
        Invest in yourself today.
        <br /> Unlock success for a lifetime.
      </h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <br />
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <br />
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s,
      </p>
      <div className="about-progress" >
        <Container >
          <Row>
            <Col>
              <h1>9 Million</h1>
              <p>STUDENTS ENROLL</p>
            </Col>
            <Col>
              <h1>96%</h1>
              <p>SATISFACTION RATE</p>
            </Col>
            <Col>
              <h1>91%</h1>
              <p>PROGRAM COMPLETION RATE</p>
            </Col>
            <Col>
              <h1>4.6/5</h1>
              <p>FACULTY RATING</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default About;
