import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart, setWishlist } from "../redux/action/course";
import AlertDialog from "./alert";

function CourseDescription(props) {
  const dispatch = useDispatch();
  const { course } = props;
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const cartItems = useSelector((state) => state.cart);
  const wishlistItems = useSelector((state) => state.wishlist);

  const handleCart = () => {
    cartItems.push(course);
    const uniqueCartItems=[...new Set(cartItems)]
    dispatch(setCart(uniqueCartItems));
    setMessage("Course successfully added in the cart ! ");
    handleAlertDailog();
  };
  const handleAlertDailog = () => {
    setOpen((modal) => !modal);
  };

  const handleAddWishlist = () => {
    wishlistItems.push(course);
    let uniqueWishlist = [...new Set(wishlistItems)];
    dispatch(setWishlist(uniqueWishlist));
    setMessage("Course added to wishlist sucessfully ! ");
    handleAlertDailog();
  };

  return (
    <>
      <div className="row pdpRow py-4">
        <div className="container d-flex flex-column justify-content-between">
          <h5 className="mb-2">{course?.title}</h5>
          <p>{course?.courseDescription}</p>
          <p className="pdp-author">{course?.courseCreator}</p>

          <button className="reactBtn col-2">{course?.tags[0]}</button>
        </div>
      </div>
      <div className="container my-2">
        <div className="row position-relative">
          <div className="col-8">
            <div className="descriptionBox border p-2">
              <h6>Course Details</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-4 courseDetils">
            <div className="row flex-column justify-content-between">
              <div className="col px-0">
                <iframe
                  width="354"
                  height="300"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>
              </div>
              <div className="col-auto border my-2 py-2">
                <h5>$ {course?.discount}/-</h5>
                <del>$ {course?.price}/-</del>
                <p className="pdp-author">8 hrs left for this course</p>
                <div className="row justify-content-around">
                  <div
                    className="col-5 reactBtn py-2 cursor"
                    onClick={handleCart}
                  >
                    Add to Cart
                  </div>
                  <div
                    className="col-5 reactBtn py-2 cursor"
                    onClick={handleAddWishlist}
                  >
                    Add to Wishlist
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AlertDialog
        open={open}
        handleAlertDailog={handleAlertDailog}
        body={message}
      />
    </>
  );
}

export default CourseDescription;
