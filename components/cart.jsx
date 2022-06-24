import { useSelector } from "react-redux";

function Cart() {
  const CartItems = useSelector((state) => {
    return state.cart;
  });
  return (
    
    <div className="cartBox p-3">
      <h6 className="text-center m-2 border-bottom pb-2">Your cart details</h6>
      <div className="cartContent">
        {CartItems?.length > 0 ? (
          CartItems.map((item) => (
            <div className="form-row align-items-center border-bottom" key={Math.round(Math.random()*item.id*100)}>
              <div className="col-auto">
                <div className="courseBox"></div>
              </div>
              <div className="col">{item.courseDescription}</div>
              <div className="col-12 text-right">
              <p className="mb-0 font-weight-bold">$ {item.discount}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center courseAuthor pb-3">
            Your cart is empty right now. Please add courses in the cart from
            the list
          </p>
        )}
      </div>
      <div className="cart-value py-2">
        <p className="mb-0 courseAuthor "> Total Cart Value</p>
        <h5> $ 50/-</h5>
      </div>
    </div>
  );
}
export default Cart;
