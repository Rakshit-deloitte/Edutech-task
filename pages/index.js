import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../components/cart";
import CourseCard from "../components/course-card";
import Header from "../components/header";
import SearchBar from "../components/searchbar";
import { setCourse } from "../redux/action/course";

function Home() {
  const [pagination, setPagination] = useState(5);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`https://62b432bb530b26da4cb8ba58.mockapi.io/courses`)
      .then((res) => {
        dispatch(setCourse(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const courses = useSelector((state) => {
    return state.course;
  });
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="row justify-content-between align-items-center mt-2">
              <div className="col">
                <p className="mb-0 font-weight-bold">All courses</p>
              </div>
              <div className="col-auto">
                <div className="btn-group">
                  <button
                    className="btn btn-sm dropdown-toggle dropdown-btn"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Course price
                  </button>
                </div>
              </div>
            </div>
            {courses.map(
              (course, index) =>
                index < pagination && <CourseCard course={course} key={course.id} />
            )}
            <nav aria-label="Page navigation example mt-2">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link custom-page-link">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link custom-page-link" onClick={()=>setPagination(5)}>1</a>
                </li>
                <li className="page-item">
                  <a className="page-link custom-page-link" onClick={()=>setPagination(7)}>2</a>
                </li>

                <li className="page-item">
                  <a className="page-link custom-page-link">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-4">
            <SearchBar />
            <Cart />
          </div>
        </div>
      </div>
     
    </>
  );
}
export default Home;
