import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ExampleCarouselImage from '../assests/crausal.jpg';
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../pages/firebase";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import "./compStyle/CourseCard.css"
function CourseCard() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  const fetchCourseList = async () => {
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
    fetchCourseList();
  }, []);
  const handleEnrollClick = (course) => {
    // Navigate to the course details page
    navigate(`/courses/${course.id}`, { state: { course } });
  };
  return (
    <div className="card_container">
      {courses.map((course) => (
      <Card style={{ width: "18rem" }} className="cards" >
      <img
           className="d-block w-100 carousel-image cards-img"
          src={course.Thumbnails}
          alt="First slide"
        />
        <Card.Body>
          <Card.Title>{course.Name}</Card.Title>
          <Card.Text className="card-description">
            {course.Description}
          </Card.Text>
          <Button variant="primary" onClick={() => handleEnrollClick(course)}>Enroll Now</Button>
        </Card.Body>
      </Card>
        ))}
    </div>
  );
}
export default CourseCard;
