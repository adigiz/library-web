import React, { useEffect, useState } from "react";

import { Layout, Row, Col } from "antd";
import BookItem from "components/book-item";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import { getBooks } from "services/books";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks().then((res) => setBooks(res.data.data));
  }, []);
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
          <p style={{ fontWeight: 800, fontSize: "32px"}}>Most Favorite</p>
          <Row>
            {books.length &&
              books.map((book) => {
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
