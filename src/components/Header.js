import React from "react";

function Header() {
  return (
    <div className="container py-4 px-1 overflow-auto">
      <div className="d-flex align-items-start">
        <div className="mr-0 mr-sm-3 mt-3">
          <img
            style={{ maxWidth: 78, minWidth: 48 }}
            src="https://www.supervaluecart.com/image/placeholder.png"
            className="image w-sm-100 w-75"
            alt="logo"
          />
        </div>
        <div className="text_color">
          <small
            className="text-uppercase font-weight-normal text-wrap word-wrap"
            style={{ wordBreak: "break-all" }}
          >
            Order on WhatsApp from
          </small>
          <br />
          <h2 className="text_color font-weight-bold text-wrap">
            SuperValueCart
          </h2>
          <h5 className="text_color">FREE Delivery Above $70</h5>
          <span className="btn btn-outline-dark text-white p-1 rounded">
            Order by Thursday &amp; Get on Saturday
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
