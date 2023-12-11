import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsProducts } from "../actions/productActions";
import {
  Button,
  Col,
  Form,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import Rating from "../components/Rating";
import {  Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProducts(params.id));
  }, [ dispatch]);
  
  


const addToCartHandler = () =>{
    
  navigate(`/cart/${params.id}?qty=${qty}`)
}
 

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <i class="fa-solid fa-arrow-left-long"></i> &nbsp;GO BACK
          </Link>
          <Row style={{ margin: "10% 0%" }}>
            <Col md={6}>
              <LazyLoadImage
                src={product.image}
                alt={product.name}
                width={"400px"}
                fluid
                effect="blur"
                style={{'@media (max-width:900px)':{
                  width:'200px'
                }}}
              />
            </Col>
            <Col md={6}>
              <ListGroupItem>
                <h3 style={{textTransform:'capitalize'}}>{product.name}</h3>
                <hr style={{height:'1px'}}/>
                {/* Brand: {product.brand} */}
              </ListGroupItem>
              <ListGroupItem>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} Reviews`}
                />
              </ListGroupItem>
              <ListGroupItem>
                <strong> Price :</strong> &nbsp;{" "}
                <i className="fa-solid fa-indian-rupee-sign"></i>&nbsp;
                {product.price}
              </ListGroupItem>
              <ListGroupItem>{product.description}</ListGroupItem>

              <br />
              <Col md={6} style={{ marginLeft: "2rem" }}>
                <ListGroup>
                  <ListGroupItem>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                      </Col>
                      {product.countInStock > 0 && (
                        <ListGroupItem>
                          <Row>
                            <Col>
                              {" "}
                              Qty
                              <Form.Control
                                as="select"
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                              >
                                {[...Array(product.countInStock).keys()].map(
                                  (x) => (
                                    <option
                                      key={x + 1}
                                      value={x + 1}
                                      style={{ color: "black" }}
                                    >
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </Form.Control>
                            </Col>
                          </Row>
                        </ListGroupItem>
                      )}
                      <hr />
                      <Button
                        className="btn-lg  btn-dark"
                        style={{ borderRadius: "0" }}
                        type="button"
                        onClick={addToCartHandler}
                      >
                        Add to Cart
                      </Button>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
