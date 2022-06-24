import { useDispatch } from "react-redux";
import { setCart } from "../redux/action/course";
const cart = [];
function CourseCard(props) {
  const { course } = props;
  const dispatch = useDispatch();
  const handleCourse = (data) => {
    
    cart.push(data);
    dispatch(setCart(cart));
  };
  return (
    <>
      <div className="form-row p-2 mb-2 align-items-center justify-content-between courseMenu ">
        <div className="col-auto">
          <div className="courseBox"></div>
        </div>
        <div className="col-4">
          <div className="d-flex flex-column justify-content-between">
            <p className="mb-0 courseDesc">{course.courseDescription}</p>
            <div className="form-row mx-0 mt-3">
              {course?.tags.map((data) => (
                <button
                  className="reactBtn ml-2"
                  key={Math.round(Math.random() * 100)}
                >
                  {data}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="col-auto">
          <p className="mb-0 courseAuthor">{course.courseCreator}</p>
        </div>
        <div className="col-auto">
          <div className="form-row align-items-center">
            <div className="col-auto">
              <img src="/Images/start.svg" height={13} />
            </div>
            <div className="col-auto courseDesc">
              <p className="mb-0 font-weight-bold">$ {course.discount}</p>
            </div>
            <div className="col-auto courseDesc">
              <del className="mb-0">$ {course.price}</del>
            </div>
          </div>
        </div>
        <div className="col-auto ">
          <div className="form-row mx-0">
            <div className="col-auto">
              <div
                className="cartBtn cursor"
                onClick={() => {
                  handleCourse(course);
                }}
              >
                Add to Cart
              </div>
            </div>
            <div className="col-auto">
              <img src="/Images/leftArrow.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
