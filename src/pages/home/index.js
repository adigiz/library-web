import React, { useEffect, useState } from "react";

import { Layout } from "antd";
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
        <div style={{ display: "flex" }}>
          {books.length &&
            books.map((book) => {
              return (
                <BookItem
                  title={book.title}
                  imageUrl={book.imageurl}
                  genre="Adventure"
                  author={book.author}
                />
              );
            })}
        </div>
      </Layout>
    </Layout>
  );
};
export default Home;
