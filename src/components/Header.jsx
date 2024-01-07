import React from "react";
import { Nav, Navbar, Container, NavDropdown, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import {productCategory} from '../actions/productActions'
import logo from '../assets/logo/logo1.png'

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    navigate("/login");
    dispatch(logout());
  };
  const location = useLocation();

  const handleClick=(e)=>{
    dispatch(productCategory(e.target.value));
  }
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand><img src={logo} alt="" width="150px" style={{borderRadius:'50px'}}></img></Navbar.Brand>
          </Link>
          {location.pathname==='/' &&
          <Form.Select
          aria-label="Default select example"
          style={{ maxWidth: "70%", margin: "auto" ,height:'40px',padding:'0px 10px',borderRadius:'0px'}}
          onChange={(e)=>{handleClick(e)}}
          >
            <option value="null">Filter By Category</option>
            <option value="men">Men's Fashion</option>
            <option value="women">Women's Fashion</option>
            <option value="electronics">Electronics</option>
            <option value="Kitchen & Dining">Kitchen & Dining</option>
            <option value="jewelery">Jewelery & Watches</option>
            <option value="bags & shoes">Bags & Shoes</option>
            <option value="home & furniture">Home & Furniture</option>
            <option value="tools & hardware">Tools & Hardware</option>
          </Form.Select>
          }
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <p
                to=""
                style={{ textDecoration: "none",marginTop:'1rem' }}
                onClick={() =>
                  userInfo ? navigate("/cart") : navigate("/login")
                }
              >
                <Nav.Link href="#home" className="">
                  <i className="fa-solid fa-cart-shopping text-dark"></i>
                  &nbsp;Cart
                </Nav.Link>
              </p>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username" style={{marginTop:'1rem'}}>
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none" }}
                    onClick={() => navigate("/profile")}
                  >
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </Link>
                  <Link
                    to="/myorders"
                    style={{ textDecoration: "none" }}
                    onClick={() => navigate("/myorders")}
                  >
                    <NavDropdown.Item>My Orders</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Nav.Link href="#link" className="" style={{marginTop:'1rem'}}>
                    <i className="fa-solid fa-user text-dark"></i>
                    &nbsp; SignIn
                  </Nav.Link>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;