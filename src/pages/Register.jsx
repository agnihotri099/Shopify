import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userAction";
import Message from "../components/shared/Message";
import Loader from "../components/shared/Loader";
import FormContainer from "../components/shared/FormContainer";

const Register = ({location, history}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
const navigate = useNavigate();
  // const redirect = location.search ? location.search.split("=")[1] : "/";
  // console.log(location.search.split("="));
  const redirect="/"

  const dispatch = useDispatch();
  const userRegister = useSelector(state => state.userRegister);
  const {loading, error,userInfo} = userRegister

  useEffect(()=>{
      if(userInfo)
      {
          navigate(redirect);
      }
  },[history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault();
    if(password !== confirmpassword)
    {
        setMessage("Password does not match");
    }
    else
    dispatch(register(name,email,password))
  };

  return (
    <>
      <FormContainer>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader/>}
        {Loader}
        {message && <Message variant="danger">{message}</Message>}
        <Form
        style={{backgroundColor:'rgba(94, 134, 157, 0.70)',padding:'50px',borderRadius:'6px',borderTopLeftRadius:'70px',borderBottomRightRadius:'70px',color:'whitesmoke'}}
        onSubmit={submitHandler}
        >
          <h1 style={{textAlign:'center',fontWeight:'800',fontStyle:'italic',fontFamily:'auto',color:'bisque',fontSize:'50px'}}>REGISTER</h1>
            <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
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
          <Form.Group controlId="confirmpassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-Enter Password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br />
          <Button type="submit" variant="dark">
            REGISTER
          </Button>
          <br />
          <br />
          <Row>
            <Col>
              Already have an account ?{" "}
              <Link
                to={"/login"}
              >
                Login
              </Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </>
  );
};

export default Register;
