import React from "react";

import { Layout, Row, Col, Skeleton } from "antd";
import BookItem from "components/book-item";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import { useFetch } from "hooks/useFetch";

const Home = () => {
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_SITE}/books`
  );
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sidebar />
      <Layout>
        <Navbar />
        <div style={{ padding: "20px" }}>
          <p style={{ fontWeight: 800, fontSize: "32px" }}>Most Favorite</p>
          <Row>
            {loading && <Skeleton/>}
            {data &&
              data.results.map((book) => {
                return (
                  <Col xs={24} xl={8}>
                    <BookItem
                      title={book.title}
                      imageUrl={book.imageurl}
                      genre="Adventure"
                      author={book.author}
                      key={book.id}
                    />
                  </Col>
                );
              })}
          </Row>
        </div>
      </Layout>
    </Layout>
  );
};
export default Home;
