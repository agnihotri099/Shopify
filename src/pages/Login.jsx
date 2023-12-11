import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction";
import Message from "../components/shared/Message";
import Loader from "../components/shared/Loader";
import FormContainer from "../components/shared/FormContainer";

const Login = ({ history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const params = useParams();
const navigate = useNavigate();
const location = useLocation();
console.log(params)
  const redirect = location.search ? location.search.split("=")[1] : "/";
  console.log(redirect)
  // const redirect ="/";
  // console.log(location.search.split("="));

  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const {loading, error,userInfo} = userLogin

  useEffect(()=>{
      if(userInfo)
      {
          navigate(redirect);
      }
  },[navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email,password))
  };
//hsl(202deg 25% 49% / 67%)
  return (
    <>
      <FormContainer>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader/>}
        {Loader}
        <Form style={{backgroundColor:'rgba(94, 134, 157, 0.70)',padding:'50px',borderRadius:'6px',borderTopLeftRadius:'70px',borderBottomRightRadius:'70px',color:'whitesmoke'}}
        onSubmit={submitHandler}
        >
        <h1 style={{textAlign:'center',fontWeight:'800',fontStyle:'italic',fontFamily:'auto',color:'bisque',fontSize:'50px'}}>SIGN IN</h1>
        <br />
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br />
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br />
          <Button type="submit" variant="dark">
            SIGN IN
          </Button>
          <br />
          <br />
          <Row>
            <Col>
              New Customer ?{" "}
              <Link
                to={'/register'}
                // style={{color:'white'}}
              >
                Register
              </Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </>
  );
};

export default Login;
