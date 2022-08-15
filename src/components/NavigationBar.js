import React, { useState } from "react";

import { Navbar, Nav } from "react-bootstrap";
import { FaWindowClose } from "react-icons/fa";

import Scroll from "react-scroll";

const scroller = Scroll.scroller;
export default function NavigationBar({ categories, filter, setFilter }) {
  const [showNav, setShowNav] = useState(true);

  return (
    <React.Fragment>
      <div
        class="card"
        style={{
          overflow: "hidden",
          borderRadius: "10px",
          boxShadow: " 0 0 9px #01786f",
        }}
      >
        <div class="card-body" style={{ backgroundColor: "#FEF9EF" }}>
          <Nav className="sticky-top bg-white m-0 p-0 ">
            <Navbar className="overflow-auto py-3 d-flex w-100">
              {showNav && (
                <img
                  src={require("../search.png")}
                  alt="search"
                  style={{ width: 24 }}
                  onClick={() => setShowNav(false)}
                />
              )}
              {!showNav && (
                <div style={{ width: "100%" }} className="flex-grow-1">
                  <div className="input-group my-1" style={{ width: "100%" }}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                    />
                    <div
                      className="input-group-append"
                      onClick={() => setShowNav(true)}
                      style={{ cursor: "pointer" }}
                    >
                      {/* <div className="input-group-text text-dark;&#x292B;"></div> */}
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                          outline: "none",
                        }}
                      >
                        <FaWindowClose
                          style={{
                            marginTop: "-4px",
                            width: "45px",
                            height: "45px",
                            color: "#01786F",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {showNav &&
                categories.map((category) => (
                  <span
                    key={category.href}
                    className="px-3 m-0 text-decoration-none text-dark text-nowrap py-2"
                    style={{
                      fontSize: "18px",
                      fontFamily: "sans-serif",
                    }}
                    onClick={() =>
                      scroller.scrollTo(category.href, {
                        duration: 500,
                        smooth: true,
                        offset: -100,
                      })
                    }
                  >
                    {category.category}
                  </span>
                ))}
            </Navbar>
          </Nav>
        </div>
      </div>
    </React.Fragment>
  );
}
