import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AlertDialog from "../components/alert";
import CartCard from "../components/cart-card";
import CourseCard from "../components/course-card";
import Header from "../components/header";

function Checkout() {
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const courseItem = useSelector((state) => state.course);

  const totalCartPrice = () => {
    const total = cartItems
      .map((item) => item.discount)
      .reduce((a, b) => a + b, 0);
    setTotal(total);
  };

  const handleAlertDailog = () => {
    setOpen((modal) => !modal);
  };

  useEffect(() => {
    totalCartPrice();
  });

  return (
    <>
      <Header />
      <div className="container">
        <p className="my-3 font-weight-bold">
          {cartItems.length} courses in cart
        </p>
        <div className="row">
          <div className="col-8 mb-3">
            {cartItems.map((item) => (
              <CartCard course={item} key={item.id} />
            ))}
          </div>

          <div className="col-4 courseMenu">
            <p className="my-2">Total Amount</p>
            <h4>$ {total}/-</h4>
            <div
              className="reactBtn cursor py-2 mt-5 mb-2"
              onClick={handleAlertDailog}
            >
              Checkout
            </div>
          </div>
        </div>
        <div className="row mx-0">
          <div className="col-8 border py-2">
            <p className="mb-2">Recommended Courses</p>
            {courseItem?.map(
              (item, index) =>
                index < 2 && <CourseCard course={item} key={item.id} />
            )}
          </div>
        </div>
      </div>
      <AlertDialog
        open={open}
        handleAlertDailog={handleAlertDailog}
        body={`Your order has been placed sucessfully ! Happy shopping`}
      />
    </>
  );
}

export default Checkout;
