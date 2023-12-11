import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserProfile } from "../actions/userAction";
import Message from "../components/shared/Message";
import Loader from "../components/shared/Loader";
import LinkedCameraOutlinedIcon from "@mui/icons-material/LinkedCameraOutlined";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);
  const [disable, setdisable] = useState("disabled")

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  

  let navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [navigate, userInfo, user, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({ id: user._id, name, email, password }));
  };
  return (
    <>
      <Row>
        <Col
          md={5}
          style={{
            backgroundColor: "rgba(94, 134, 157, 0.70)",
            padding: "50px",
            borderRadius: "6px",
            borderTopLeftRadius: "70px",
            borderBottomRightRadius: "70px",
            color: "whitesmoke",
          }}
        >
          {loading && <Loader />}
          {error && <Message variant="danger">{error}</Message>}
          {success && <Message variant="success">Profile Updated</Message>}
          {/* {message && <Message variant="danger">{message}</Message>} */}
          <h1
            style={{
              textAlign: "center",
              fontWeight: "800",
              fontStyle: "italic",
              fontFamily: "auto",
              color: "bisque",
            }}
          >
            UPDATE PROFILE
          </h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={disable}
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
                disabled={disable}
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
                disabled={disable}
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
                disabled={disable}
              ></Form.Control>
            </Form.Group>
            <br />
            <Button  variant="dark" onClick={()=>setdisable("")}>Edit</Button>
            &nbsp;
            &nbsp;
            <Button type="submit" variant="dark" disabled={disable}>
              Update
            </Button>
          </Form>
        </Col>
        <Col md={5} style={{ margin: "auto" }}>
          {image ?(
            
            <img src={URL.createObjectURL(image)}  alt="" />
          ):(
          <div
            style={{
              backgroundColor: "#98cde259",
              padding: "15px",
              borderRadius: "50%",
              width: "100px",
              height: "100px",
            }}
          >
            <LinkedCameraOutlinedIcon style={{ textAlign: "center" }} />

              <p>No Image</p>
          </div>
            )}

          {/* <DriveFolderUploadOutlinedIcon/> */}
          <br />
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => {
                setImage(event.target.files[0]);
              }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ProfileScreen;
