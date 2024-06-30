import ListGroup from "react-bootstrap/ListGroup";
import "./compStyle/CourseCard.css";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../pages/firebase";
import { useState, useEffect } from "react";

function CourseList() {
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
      const querySnapshot = await getDocs(collection(db, "Course_Type"));
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

  return (
    <div>
      <ListGroup className="course-list">
        {courses.map((course) => (
          <ListGroup.Item action key={course.id}>
            {course.Name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default CourseList;
