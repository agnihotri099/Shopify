import React from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import CheckoutStep from "../components/shared/CheckoutStep";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/shared/Message";
import { Link, useNavigate } from "react-router-dom";
import { createOrder, detailsOrder } from "../actions/orderAction";
import { useEffect } from "react";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, error, success } = orderCreate;
  const cart = useSelector((state) => state.cart);
  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(1);
  };
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  var itemsCart = [];
  var i=0;
  cart.cartItems.map(
    (items) =>
      items.userId === userInfo._id && (
        itemsCart[i++] = items
        )
      
  );
  cart.itemPrice = addDecimal(
    itemsCart.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimal(itemsCart > 500 ? 0 : 50);
  cart.taxPrice = addDecimal(Number((0.15 * cart.itemPrice).toFixed(2)));
  cart.totalPrice =
    Number(cart.itemPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice);
  const order_item = {
    orderItems:itemsCart,
    shippingAddress: cart.shippingAddress,
    paymentMethod: cart.paymentMethod,
    itemPrice: cart.itemPrice,
    shippingPrice: cart.shippingPrice,
    taxPrice: cart.taxPrice,
    totalPrice: cart.totalPrice,
  };
  console.log(itemsCart)
  const placeOrderHandler = (e) => {
    e.preventDefault();
    dispatch(createOrder(order_item));
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
      dispatch(detailsOrder(order._id))
    }
  }, [navigate, success]);

  return (
    <>
      <CheckoutStep step1 step2 step3 step4></CheckoutStep>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>&nbsp;
                {cart.shippingAddress.address}&nbsp;
                {cart.shippingAddress.city}&nbsp;
                {cart.shippingAddress.postalcode}&nbsp;
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>{cart.paymentMethod}</strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your Cart is Empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {itemsCart.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image src={item.image} alt={item.name} fluid />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x {item.price} = {item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>{cart.itemPrice}</Col>
                </Row>
                <Row>
                  <Col>Shipping</Col>
                  <Col>{cart.shippingPrice}</Col>
                </Row>
                <Row>
                  <Col>Tax</Col>
                  <Col>{cart.taxPrice}</Col>
                </Row>
                <Row>
                  <Col>Total</Col>
                  <Col>{cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cart.cartItems === 0}
                onClick={placeOrderHandler}
              >
                Place Order
              </Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrder;
