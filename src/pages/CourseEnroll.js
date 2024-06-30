import { useParams, useLocation } from "react-router-dom";
import NavBar from "../components/navbar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./pagescss/CourseEnroll.css";
function CourseDetails() {
  const { id } = useParams();
  const location = useLocation();
  const course = location.state.course;

  return (
    <div className="course-details-container">
      

      <div className="course-details">
        <Container>
          <Col xs={6}>
            <Row>
              <h1>{course.Name}</h1>
              <p></p>
              <img src={course.Thumbnails} alt={course.Name} />
              <p>{course.Description}</p>
              {/* Add more course details here */}
            </Row>
          </Col>
        </Container>
      </div>
    </div>
  );
}

export default CourseDetails;
