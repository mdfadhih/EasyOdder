import React from "react";
import Product from "./Product";
var Scroll = require("react-scroll");
var Element = Scroll.Element;
export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main>
      <Element name="promotions">
        <h2 id="promotions" className="main_header my-4">
          {/* Promotions */}
        </h2>
      </Element>
      <div
        class="card"
        style={{
          overflow: "hidden",
          borderRadius: "10px",
          boxShadow: " 0 0 9px #01786f",
        }}
      >
        <div
          class="card-body"
          style={{
            backgroundColor: "#FEF9EF",
          }}
        >
          <div
            class="card-header"
            style={{
              backgroundColor: "#01786f",
              textAlign: "left",
              color: "white",
              fontSize: "19px",
              fontWeight: "600",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
              // borderEndStartRadius: "10px",
              // borderEndEndRadius: "10px",
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
              Promotions
            </h5>
          </div>
          <p
            class="cart-text"
            style={{
              overflow: "hidden",
              width: "100%",
            }}
          >
            {products
              .filter((product) => product.id < 5)
              .map((filteredProduct) => (
                <Product
                  key={filteredProduct.id}
                  product={filteredProduct}
                  onAdd={onAdd}
                />
              ))}
          </p>
        </div>
      </div>
      <Element name="rice">
        <h2 id="rice" className="main_header my-4">
          Rice
        </h2>
      </Element>
      <div>
        {products
          .filter((product) => product.id < 15 && product.id > 5)
          .map((filteredProduct) => (
            <Product
              key={filteredProduct.id}
              product={filteredProduct}
              onAdd={onAdd}
            />
          ))}
      </div>
      <Element name="dal">
        <h2 id="dal" className="main_header my-4">
          Dal
        </h2>
      </Element>
      <div>
        {products
          .filter((product) => product.id < 24 && product.id > 14)
          .map((filteredProduct) => (
            <Product
              key={filteredProduct.id}
              product={filteredProduct}
              onAdd={onAdd}
            />
          ))}
      </div>
      <Element name="salt">
        <h2 id="salt" className="main_header my-4">
          Salt
        </h2>
      </Element>
      <div>
        {products
          .filter((product) => product.id > 23)
          .map((filteredProduct) => (
            <Product
              key={filteredProduct.id}
              product={filteredProduct}
              onAdd={onAdd}
            />
          ))}
      </div>
    </main>
  );
}
