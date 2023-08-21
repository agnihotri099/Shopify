import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link card">
            <div className="image">
              <img
                src={image}
                style={{
                  resizeMode: "contain",
                  height: 200,
                  width: 290,
                }}
                alt={title}
              />
            </div>
            <div className="content">
              <h4 className="ui   header" >{title}</h4>
              <div className="meta price">${price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="ui four column grid">{renderList}</div>;
};

export default ProductComponent;
