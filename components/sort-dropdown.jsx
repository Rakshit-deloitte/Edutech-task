import { useDispatch, useSelector } from "react-redux";
import { setCourse } from "../redux/action/course";

function SortCourse() {
  const courses = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    if (event.target.value == "low") {
      const asecndingCourse = courses.sort((a, b) => a.discount - b.discount);
      dispatch(setCourse(asecndingCourse));
    } else {
      const desecndingCourse = courses.sort((a, b) => b.discount - a.discount);
      dispatch(setCourse(desecndingCourse));
    }
  };
  return (
    <>
      <form action="#">
        <select
          name="languages"
          className="p-2"
          onChange={handleChange}
          id="lang"
          style={{ fontSize: "12px" }}
        >
          <option value="null">Course Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </form>
    </>
  );
}

export default SortCourse;
