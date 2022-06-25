import { useSelector } from "react-redux";
import CourseDescription from "../components/course-description";
import Header from "../components/header";
import Navigation from "../components/pdp-navigation";

function Course() {
  const course = useSelector((state) => {
    return state.pdpData;
  });

  return (
    <>
      <Header />
      <Navigation course={course[0]} />
      <CourseDescription course={course[0]} />
    </>
  );
}

export default Course;
