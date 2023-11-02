import React from "react";

import { Row, Col, Skeleton } from "antd";
import BookItem from "components/book-item";
import { useFetch } from "hooks/useFetch";

const Home = () => {
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_SITE}/books`
  );
  return (
    <div style={{ padding: "20px" }}>
      <p style={{ fontWeight: 800, fontSize: "32px" }}>Most Favorite</p>
      <Row>
        {loading && <Skeleton />}
        {data &&
          data.results.map((book, index) => {
            const genres = book.genre.split(",")
            const genre = genres[0]
            return (
              <Col key={index} xs={24} xl={8}>
                <BookItem
                  title={book.title}
                  imageUrl={book.imageurl}
                  genre={genre}
                  author={book.author}
                  slug={book.slug}
                  publishedDate={book.published_date}
                />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
export default Home;
