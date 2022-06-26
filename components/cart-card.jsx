
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart, setWishlist } from "../redux/action/course";
import SimpleSnackbar from "./snackbar";

let wishlistArray = [];
function CartCard(props) {
  const [Wishlistopen, setWishlistOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setWishlistOpen((wishlist) => !wishlist);
  };

  const cartItems = useSelector((state) => {
    return state.cart;
  });

  const { course } = props;
  const dispatch = useDispatch();

  

  const handleWishlist = (data) => {
    wishlistArray.push(data);
    let uniqueWishlist = [...new Set(wishlistArray)];
    dispatch(setWishlist(uniqueWishlist));
    handleClose();
  };

  const deleteItemFromCart = (data) => {
    const index = cartItems.indexOf(data);
    cartItems.splice(index, 1);
    dispatch(setCart(cartItems));
  };


  return (
    <>
      <div className="form-row p-2 mb-2 align-items-center courseMenu ">
        <div className="col-auto">
          <div className="courseBox"></div>
        </div>
        <div className="col-7">
          <div className="d-flex flex-column justify-content-between">
            <p className="mb-0 courseDesc">{course.courseDescription}</p>
            <div className="form-row mx-0 mt-3">
              <p className="mb-0 courseAuthor">{course.courseCreator}</p>
            </div>
          </div>
        </div>

        <div className="col-auto">
          <div className="form-row align-items-center">
            <div className="col-auto courseDesc">
              <p className="mb-0 font-weight-bold">$ {course.discount}</p>
            </div>
          </div>
        </div>
        <div className="col-auto ">
          <div className="form-row mx-0 justify-content-between align-items-center">
            <div className="col-auto" onClick={() => handleWishlist(course)}>
              <p className="mb-0 py-1 cartCard-wishlist pr-3">Move to Wishlist</p>
            </div>

            <div className="col-auto cursor" onClick={()=>deleteItemFromCart(course)}>
              <img src="/Images/delete.svg" height={18} />
            </div>
          </div>
        </div>
      </div>
      
      <SimpleSnackbar
        open={Wishlistopen}
        handleClose={handleClose}
        severity={"success"}
        message={"Item added to wishlist, Please check on wishlist page."}
      />
    </>
  );
}

export default CartCard;
