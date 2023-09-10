import React, { useEffect } from "react";

import { Layout } from "antd";
import BookItem from "components/book-item";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
const { Footer } = Layout;

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    
  })
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sidebar />
      <Layout>
        <Navbar />
        <BookItem
          title="Harry Potter and The Philoshopher Stone"
          imageUrl="https://images.ctfassets.net/usf1vwtuqyxm/2DCs73x6P8seNobQ9zBSbO/1a5dfd6ed5fc0ed9545370470fc3d74c/English_Harry_Potter_1_Epub_9781781100219.jpg?w=914&q=70&fm=webp"
          genre="Adventure"
          author="JK. Rowling"
        />
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home;
