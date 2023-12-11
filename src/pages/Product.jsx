import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";


const Product = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-2 rounded" style={{height:'420px'}}>
        <Link to={`products/${product._id}`}>
          <Card.Img src={product.image} variant="top" loading="lazy" style={{height:'200px'}}/>
        </Link>

        <Card.Body>
          <Link
            to={`/products/${product._id}`}
            style={{ textDecoration: "none" }}
          >
            <Card.Title as="div">
              <strong style={{textTransform:'capitalize'}}>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          {/* </Card.Text>
          <Card.Text> */}
            <i className="fa-solid fa-indian-rupee-sign"></i> &nbsp;{product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;