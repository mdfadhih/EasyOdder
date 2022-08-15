import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";

// import { BsPlusSquareFill } from "react-icons/bs";
import "../assets/css/style.css";
var Scroll = require("react-scroll");

var Element = Scroll.Element;
export default function Basket(props) {
  const {
    onAdd,
    onRemove,
    itemsPrice,
    taxPrice,
    totalPrice,
    cartItems,
    onPost,
  } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [addresstwo, setAddresstwo] = useState("");
  const [email, setEmail] = useState("");
  const [postal, setPostal] = useState("");
  const [note, setNote] = useState("");

  const [nameErr, setNameErr] = useState({});
  const [phoneErr, setPhoneErr] = useState({});
  const [addressErr, setAddressErr] = useState({});
  const [addresstwoErr, setAddresstwoErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [postalErr, setPostalErr] = useState({});

  const formValidation = () => {
    const nameErr = {};
    const phoneErr = {};
    const addressErr = {};
    const addresstwoErr = {};
    const emailErr = {};
    const postalErr = {};
    let isValid = true;

    if (name.length === 0) {
      nameErr.nameInvalid = "Please input a valid name";
      isValid = false;
    }
    if (phone.length === 0) {
      phoneErr.phoneInvalid = "Please input a valid number";
      isValid = false;
    }
    if (phone.length !== 10) {
      phoneErr.phoneInvalid = "Please input a valid number";
      isValid = false;
    }
    if (address.length === 0) {
      addressErr.addressInvalid = "Please input a valid address";
      isValid = false;
    }
    if (addresstwo.length === 0) {
      addresstwoErr.addresstwoInvalid = "Please input a valid address";
      isValid = false;
    }
    if (email.length === 0) {
      emailErr.emailInvalid = "Please input a valid email address";
      isValid = false;
    }
    if (!email.includes("@")) {
      emailErr.emailInvalid = "Please input a valid email address";
      isValid = false;
    }
    if (!email.includes(".")) {
      emailErr.emailInvalid = "Please input a valid email address";
      isValid = false;
    }
    if (postal.length === 0) {
      postalErr.postalInvalid = "Please input a valid postal code";
      isValid = false;
    }
    if (cartItems.length === 0) {
      cartItems.cartEmpty = "Cart cannot be Empty";
      isValid = false;
    }

    setNameErr(nameErr);
    setPhoneErr(phoneErr);
    setAddressErr(addressErr);
    setAddresstwoErr(addresstwoErr);
    setEmailErr(emailErr);
    setPostalErr(postalErr);

    return isValid;
  };
  return (
    <React.Fragment>
      <Container fluid className="m-2 p-2">
        <div style={{ marginBottom: "6rem" }}>
          <div>
            <form>
              <div
                class="card"
                style={{
                  overflow: "hidden",
                  borderRadius: "10px",
                  boxShadow: " 0 0 9px #01786f",
                  marginLeft: "-15px",
                }}
              >
                <div
                  class="card-body"
                  style={{
                    backgroundColor: "#FEF9EF",
                    overflow: "hidden",
                    borderRadius: "20px",
                  }}
                >
                  <div
                    className="p-3 bg-white shadow p-1 mb-2"
                    style={{ borderRadius: "10px" }}
                    // style={{ backgroundColor: "#FEF9EF" }}
                  >
                    <div>
                      <div
                        style={{
                          background: "#01786F",
                        }}
                        className="my-3 p-1 rounded d-inline-block"
                      >
                        <div
                          style={{ cursor: "pointer" }}
                          className="font-weight-bold m-0 p-0 delivery text-white d-inline-block px-2"
                        >
                          Delivery
                        </div>
                        <div
                          className="pickup text-white d-inline-block px-2 bg-white text-secondary font-weight-bold"
                          style={{
                            borderTopRightRadius: 2,
                            borderBottomRightRadius: 2,
                            cursor: "pointer",
                          }}
                        >
                          Pick-up
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="name" className="header_form">
                        Name
                      </label>
                      <input
                        id="name"
                        value={name}
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        style={{ fontVariant: "small-caps" }}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                      {Object.keys(nameErr).map((key) => {
                        return (
                          <div
                            style={{ color: "red", marginLeft: "0.5rem" }}
                            key={nameErr[key]}
                          >
                            {nameErr[key]}
                          </div>
                        );
                      })}
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="header_form">
                        Contact number
                      </label>
                      <input
                        id="phone"
                        value={phone}
                        type="number"
                        className="form-control"
                        placeholder="Phone"
                        style={{ fontVariant: "small-caps" }}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                      {Object.keys(phoneErr).map((key) => {
                        return (
                          <div
                            style={{ color: "red", marginLeft: "0.5rem" }}
                            key={phoneErr[key]}
                          >
                            {phoneErr[key]}
                          </div>
                        );
                      })}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="header_form">
                        Email address
                      </label>
                      <input
                        id="email"
                        value={email}
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        style={{ fontVariant: "small-caps" }}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      {Object.keys(emailErr).map((key) => {
                        return (
                          <div
                            style={{ color: "red", marginLeft: "0.5rem" }}
                            key={emailErr[key]}
                          >
                            {emailErr[key]}
                          </div>
                        );
                      })}
                    </div>
                    <div className="form-group">
                      <label htmlFor="address" className="header_form">
                        AddressLine1
                      </label>
                      <input
                        id="address"
                        value={address}
                        type="text"
                        style={{ color: "#01786F" }}
                        className="form-control"
                        placeholder="Address"
                        style={{ fontVariant: "small-caps" }}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                      {Object.keys(addressErr).map((key) => {
                        return (
                          <div
                            style={{ color: "red", marginLeft: "0.5rem" }}
                            key={addressErr[key]}
                          >
                            {addressErr[key]}
                          </div>
                        );
                      })}
                    </div>
                    <div className="form-group">
                      <label htmlFor="addresstwo" className="header_form">
                        AddressLine2
                      </label>
                      <input
                        id="addresstwo"
                        value={addresstwo}
                        type="text"
                        style={{ color: "#01786F" }}
                        className="form-control"
                        placeholder="Address"
                        style={{ fontVariant: "small-caps" }}
                        onChange={(e) => {
                          setAddresstwo(e.target.value);
                        }}
                      />
                      {Object.keys(addresstwoErr).map((key) => {
                        return (
                          <div
                            style={{ color: "red", marginLeft: "0.5rem" }}
                            key={addresstwoErr[key]}
                          >
                            {addresstwoErr[key]}
                          </div>
                        );
                      })}
                    </div>
                    <div className="form-group">
                      <label htmlFor="zipcode" className="header_form">
                        Postal code
                      </label>
                      <input
                        id="zipcode"
                        value={postal}
                        type="number"
                        className="form-control"
                        placeholder="Postal Code"
                        style={{ fontVariant: "small-caps" }}
                        onChange={(e) => {
                          setPostal(e.target.value);
                        }}
                      />
                      {Object.keys(postalErr).map((key) => {
                        return (
                          <div
                            style={{ color: "red", marginLeft: "0.5rem" }}
                            key={postalErr[key]}
                          >
                            {postalErr[key]}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <Element name="form">
                <div
                  class="card"
                  style={{
                    overflow: "hidden",
                    borderRadius: "10px",
                    boxShadow: "0 0 9px #01786f",
                    marginTop: "20px",
                    marginLeft: "-15px",
                  }}
                >
                  <div
                    class="card-body"
                    style={{ backgroundColor: "#FEF9EF", marginTop: "-15px" }}
                  >
                    <div
                      className="bg-white border p-2 mt-3 shadow p-1 mb-2 bg-white"
                      style={{
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        class="card-header"
                        style={{
                          background: "#01786f",
                          marginTop: "15px",
                        }}
                      >
                        <h5
                          style={{
                            marginLeft: "-15px",
                            color: "white",
                            fontSize: "19px",
                            fontWeight: "600",
                          }}
                        >
                          Your Cart
                        </h5>
                      </div>
                      <div
                        style={{
                          height: "auto",
                          marginBottom: "2rem",
                        }}
                      >
                        {cartItems.length === 0 && (
                          <div className="d-flex align-items-center justify-content-center border-bottom p-4">
                            <div className="text-secondary">
                              Your cart is empty
                            </div>
                          </div>
                        )}
                        <div className="border">
                          {cartItems.map((item) => (
                            <div
                              key={item.id}
                              className="d-flex align-items-center justify-content-between border-bottom py-1 px-1 flex-nowrap"
                            >
                              <div className="text_format">
                                {item.englishname}
                              </div>

                              <span>&nbsp;|&nbsp;</span>

                              <FaMinus
                                onClick={() => onRemove(item)}
                                className="px-1 h-auto"
                                style={{
                                  width: "25px",
                                  height: "25px",
                                  color: "#01786F",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginInlineStart: "20px",
                                }}
                              />

                              <div className="">
                                {item.qty} x ${item.price.toFixed(2)}
                              </div>

                              <FaPlus
                                className="px-1 h-auto"
                                onClick={() => onAdd(item)}
                                style={{
                                  width: "25px",
                                  height: "25px",
                                  color: "#01786F",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              />
                            </div>
                          ))}
                        </div>
                        {cartItems.length !== 0 && (
                          <>
                            <hr></hr>
                            <div className="text-secondary d-flex justify-content-between p-0">
                              <div>
                                <strong>Items Price</strong>
                              </div>
                              <div>
                                <strong>${itemsPrice.toFixed(2)}</strong>
                              </div>
                            </div>
                            <div className="text-secondary d-flex justify-content-between">
                              <div>Delivery Fee</div>
                              <div>${taxPrice.toFixed(2)}</div>
                            </div>
                            <div className="text-secondary d-flex justify-content-between">
                              <div>
                                <strong>Total Price</strong>
                              </div>
                              <div>
                                <strong>${totalPrice.toFixed(2)}</strong>
                              </div>
                            </div>
                            <div
                              style={{ fontSize: "12px" }}
                              className="text-secondary my-2"
                            >
                              Your order is ready to be sent via WhatsApp.
                            </div>
                            <hr />
                          </>
                        )}
                      </div>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                          as="textarea"
                          placeholder="Note"
                          style={{ fontVariant: "small-caps" }}
                          value={note}
                          rows={3}
                          onChange={(e) => {
                            setNote(e.target.value);
                          }}
                        />
                      </Form.Group>

                      <Button
                        type="button"
                        className="btn btn-success d-block w-100"
                        style={{
                          color: "white",
                          background: "#01786F",
                          fontVariant: "small-caps",
                          marginBottom: "15px",
                        }}
                        onClick={() =>
                          formValidation() &&
                          onPost(cartItems, {
                            name,
                            phone,
                            address,
                            addresstwo,
                            postal,
                            note,
                          })
                        }
                      >
                        Click to WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </Element>
            </form>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
