import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CourseCard from "../components/CourseCard";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./pagescss/Courses.css"
import CourseList from "../components/Courselist";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../pages/firebase";
import { useState, useEffect } from "react";


function OurCourses() {
  const [courses, setCourses] = useState([]);
  const fetchOfferedCourses = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Offered-Courses"));
      const courseList = [];
      querySnapshot.forEach((doc) => {
        courseList.push({ id: doc.id, ...doc.data() });
      });
      setCourses(courseList);
    } catch (error) {
      console.error("Error fetching courses:", error.message);
    }
  };

  useEffect(() => {
    fetchOfferedCourses();
  }, []);
  return (
    
    <Container>
      <Row>
        <Col xs={3}>
          <div className="course-container choose">
            <h1>Choose Our Top Courses</h1>
            <CourseList/>
          </div>
        </Col>
      

      <Col xs={9}>
        <div className=" course-container">
          <h1>Our Courses</h1>
          
          <div className=" course-card">
          
            <CourseCard  />
            
            
          
          </div>
          
        </div>
      </Col>
      </Row>
    </Container>
  );
}
export default OurCourses;
