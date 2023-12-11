import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/shared/Message";
import Loader from "../components/shared/Loader";
import { detailsOrder, listOrders } from "../actions/orderAction";

const MyOrder = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const orderList = useSelector((state) => state.orderList);
  const { loading: loadingOrders, orders, error: errorOrders } = orderList;

  let navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
        dispatch(listOrders());
    }
  }, [navigate, userInfo, dispatch]);
  const getDetails = (id) => {
    navigate(`/order/${id}`);
    dispatch(detailsOrder(id));
  };
  return (
    <>
      <h1>My Orders</h1>
      {loadingOrders ? (
        <Loader />
      ) : errorOrders ? (
        <Message variant="danger">{errorOrders}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <td>ID</td>
              <td>DATE</td>
              <td>TOTAL</td>
              <td>PAID</td>
              <td>DELIVERED</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} >
                <td>{order._id}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  {/* <LinkContainer to={`/order/${order._id}`}> */}
                  <Button
                    variant="light"
                    onClick={() => {
                      getDetails(order._id);
                    }}
                    size="sm"
                    style={{margin:'10px',padding:'7px 25px'}}
                  >
                    Details
                  </Button>
                  {/* </LinkContainer> */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default MyOrder;
