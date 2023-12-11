import React from "react";
import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import CheckoutStep from "../components/shared/CheckoutStep";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress) {
    navigate("/shipping");
  }
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };
  return (
    <>
      <CheckoutStep step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Payment Gateway</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Paypal or Credit Card"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
              </Col>
              <Col>
            <Form.Check
              type="radio"
              label="Debit Card"
              id="debitcard"
              name="paymentMethod"
              value="debitcard"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="UPI Payment"
                id="upi"
                name="paymentMethod"
                value="upi"
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </>
  );
};

export default Payment;
