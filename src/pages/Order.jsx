import React from "react";
import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailsOrder, payOrder } from "../actions/orderAction";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import { Card, Col, Image, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState } from "react";
import {PayPalButton} from 'react-paypal-button-v2'
import { ORDER_PAY_RESET } from "../constants/orderConstant";
import axiosInstance from "../config";

const Order = () => {

  // window.location.reload()

  const [sdkReady, setSdkReady] = useState(false)
  const params = useParams();
  const orderId = params.id;
  console.log(orderId)
  const dispatch = useDispatch();
  const orderPay = useSelector((state)=>state.orderPay);
  const {loading:loadingPay , success:successPay} = orderPay
  const orderDetail = useSelector((state) => state.orderDetail);
  const { loading, error, order } = orderDetail;
  
  if (!loading) {
    console.log(order)
   
    const addDecimal = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };
        order.itemPrice = addDecimal(order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0));
  }
  const successPaymentHandler=(paymentResult)=>{
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult))
  }
  
  useEffect(() => {
    const addPaypalScript = async()=>{
      const {data:clientId} = await axiosInstance.get('/config/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true;
      script.onload=()=>{
        setSdkReady(true);
      }
      document.body.appendChild(script);
    }
    if(order)
    {

    }
    if(!order || successPay)
    {
      dispatch(detailsOrder(orderId));
      dispatch({type : ORDER_PAY_RESET })
    }
    else
    if(!order.isPaid)
    {
      if(!window.paypal)
      {
        addPaypalScript();
      }
      else
      {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId,order,successPay]);

  return (
  
  loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h2>Order {order._id}</h2>
      <Row>
        <Col md={8}>
          <ListGroup.Item variant="flush">
            <h2>Shipping</h2>
            <p>
                <strong>Name :</strong>
                {order.user.name}
            </p>
            <p>
                <strong>Email :</strong>
                {order.user.email}
            </p>
            <p>
              <strong>Address:</strong>
              {order.shippingAddress.address}&nbsp;
              {order.shippingAddress.city}&nbsp;
              {order.shippingAddress.postalcode}&nbsp;
              {order.shippingAddress.country}
            </p>
            {
                order.isDelivered ? <Message variant="success">Delivered {order.atDelivered}</Message>
                :
                 <Message variant="danger">Not Delivered</Message>
            }
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Payment Method</h2>
            <p>
              <strong>Method:</strong>
              <strong>{order.paymentMethod}</strong>
            </p>
            {
                order.isPaid ? <Message variant="success">Paid On {order.paidAt.substring(0,10)}</Message>
                :
                 <Message variant="danger">Not Paid</Message>
            }
          </ListGroup.Item>
          <ListGroup.Item>
                    <h2>Order Items</h2>
                    {order.orderItems.length === 0 ?(
                        <Message>Your order is Empty</Message>
                    ):(
                        <ListGroup variant='flush'>
                        {order.orderItems.map((item,index)=>(
                            <ListGroup.Item key={index}>
                                <Row>
                                    <Col md={1}>
                                        <Image src={item.image} alt={item.name} fluid/>
                                    </Col>
                                    <Col>
                                    <Link to={`/products/${item.product}`}>{item.name}</Link>
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
                  <Col>{order.itemPrice}</Col>
                </Row>
                <Row>
                  <Col>Shipping</Col>
                  <Col>{order.shippingPrice}</Col>
                </Row>
                <Row>
                  <Col>Tax</Col>
                  <Col>{order.taxPrice}</Col>
                </Row>
                <Row>
                  <Col>Total</Col>
                  <Col>{order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
             
            </ListGroup>
          </Card>
          {!order.isPaid && (
            <ListGroup.Item>
              {loadingPay && <Loader/>}
              {!sdkReady ? (<Loader/>) :(<PayPalButton amount={order.totalPrice} onSuccess={successPaymentHandler}/>)}
            </ListGroup.Item>
          )}
        </Col>
      </Row>
    </>
  ))
};

export default Order;
