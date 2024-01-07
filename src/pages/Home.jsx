import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";

// const getRandomObject = (array) => {
//   var pro=[];
//   for (let index = 0; index < array.length; index++) {
//     const randomObject = array[Math.floor(Math.random() * array.length)];
//     pro[index]=randomObject;
//   }
//   return pro;
// };

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const category = useSelector((state) => state.category);
  const { cate, loading: loadingCate } = category;
  const prod = products;

  prod.sort(() => 0.5 - Math.random());
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {loadingCate ? (
              <Loader />
            ) : cate === "" || cate === "null" ? (
              products.slice(0, 12).map((product) => (
                <Col key={product._id} md={3} style={{ height: "450px" }}>
                  <Product product={product} />
                </Col>
              ))
            ) : (
              products.map(
                (product) =>
                  product.category.startsWith(cate) && (
                    <Col key={product._id} md={4} style={{ height: "450px" }}>
                      <Product product={product} />
                    </Col>
                  )
              )
            )}
          </Row>
        </>
      )}
    </>
  );
};

export default Home;