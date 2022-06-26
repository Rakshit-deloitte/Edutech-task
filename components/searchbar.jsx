import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCourse } from "../redux/action/course";

function SearchBar() {
  const [searchField, setSearchField] = useState("");
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course);

  const handleChange = (event) => {
    setSearchField(event.target.value);
    filteredLists();
  };
  const filteredLists = () => {
    console.log(courses);
    const filteredCourse = courses.filter(
      (course) =>
        course?.courseCreator
          .toLowerCase()
          .includes(searchField.toLowerCase()) ||
        course?.courseDescription
          .toLowerCase()
          .includes(searchField.toLowerCase())
    );
    setTimeout(() => {
      dispatch(setCourse(filteredCourse));
    }, 1000);
  };
  return (
    <>
      <form className="my-2 position-relative">
        <input
          type={"search"}
          className="form-control searchInput"
          onChange={handleChange}
          value={searchField}
        />
        <span className="searchIcon">
          <img src="/Images/search.svg" width={20} height={14}></img>
        </span>
      </form>
    </>
  );
}

export default SearchBar;
