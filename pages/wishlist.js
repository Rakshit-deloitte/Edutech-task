import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../components/cart";
import CourseCard from "../components/course-card";
import Header from "../components/header";
import SearchBar from "../components/searchbar";
import { setCourse } from "../redux/action/course";

function Wishlist() {
  const dispatch = useDispatch();

  const courses = useSelector((state) => {
    return state.wishlist;
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
            {courses.map((course) => (
              <CourseCard course={course} key={course.id} wishlist={true} />
            ))}
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
export default Wishlist;
