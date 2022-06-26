import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart, setPdpData, setWishlist } from "../redux/action/course";
import AlertDialog from "./alert";
import SimpleSnackbar from "./snackbar";
const cart = [];
let wishlistArray = [];
function CourseCard(props) {
  const { wishlist } = props;
  const [open, setOpen] = useState(false);
  const [Wishlistopen, setWishlistOpen] = useState(false);

  const handleAlertDailog = () => {
    setOpen((modal) => !modal);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setWishlistOpen((wishlist) => !wishlist);
  };

  const wishListCourse = useSelector((state) => {
    return state.wishlist;
  });

  const { course } = props;
  const dispatch = useDispatch();

  const handleCourse = (data) => {
    let duplicate = cart?.some((ele) => ele.id == data.id);
    if (duplicate) {
      handleAlertDailog();
      return cart;
    } else {
      cart.push(data);
    }
    dispatch(setCart(cart));
  };

  const handleWishlist = (data) => {
    wishlistArray.push(data);
    let uniqueWishlist = [...new Set(wishlistArray)];
    dispatch(setWishlist(uniqueWishlist));
    handleClose();
  };

  const deleteWishlist = (data) => {
    const index = wishListCourse.indexOf(data);
    wishListCourse.splice(index, 1);
    dispatch(setWishlist(wishListCourse));
  };

  const RouteToPdp = (data) => {
    dispatch(setPdpData([data]));
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
            {wishlist ? (
              ""
            ) : (
              <div
                className="col-auto cursor"
                onClick={() => handleWishlist(course)}
              >
                <img src="/Images/star.svg" height={13} />
              </div>
            )}

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
            {wishlist ? (
              <div
                className="col-auto cursor"
                onClick={() => deleteWishlist(course)}
              >
                <img src="/Images/delete.svg" height={18} />
              </div>
            ) : (
              ""
            )}
            <Link href={`/course`}>
              <div className="col-auto">
                <img
                  src="/Images/leftArrow.svg"
                  className="cursor"
                  onClick={() => RouteToPdp(course)}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <AlertDialog
        open={open}
        handleAlertDailog={handleAlertDailog}
        body={"Item Already exits in cart, Please add a new item."}
      />
      <SimpleSnackbar
        open={Wishlistopen}
        handleClose={handleClose}
        message={"Item added to wishlist, Please check on wishlist page."}
      />
    </>
  );
}

export default CourseCard;
