import React from "react";

function Header() {
  return (
    <>
      <div className="row align-items-center justify-content-between header p-2">
        <div className="col">
          <img src="/Images/Logo-2.png" />
        </div>
        <div className="col-auto">
          <div className="row align-items-center">
            <div className="col-auto cursor">
              <p className="font-weight-bold mb-0">Courses</p>
            </div>
            <div className="col-auto cursor">
              <p className="mb-0">My Wishlist</p>
            </div>
            <div className="col-auto cursor">
              <img src="Images/shopping-cart.svg" />
            </div>
            <div className="col-auto cursor">
              <img src="Images/profile.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-2">
        <div className="row align-items-center justify-content-between p-2 sub-header">
          <div className="col sub-header-text">
            <p className="mb-0">Discover Latest courses on</p>
            <p className="mb-0">React</p>
          </div>
          <div className="col-auto">
            <img src="/Images/react-1.svg" width={50} />
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Header);
