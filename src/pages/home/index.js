import React, { useState } from "react";

import { Row, Col, Skeleton, Pagination, Input, Select, Button } from "antd";
import BookItem from "components/book-item";
import { useFetch } from "hooks/useFetch";
import "./index.css"
import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';
const { Search } = Input;

const Home = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc");
  const [sortBy, setSortBy] = useState("created_at");
  const [sortLabel, setSortLabel] = useState("Descending");
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_SITE}/books?search=${search}&sort=${sort}&sortBy=${sortBy}&limit=9&page=${page}`
  );

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleSortByChange = (value) => {
    setSortBy(value);
  };

  const handleSortChange = () => {
    if (sortLabel === "Descending") {
      setSort("asc")
      setSortLabel("Ascending")
      return
    }
    setSort("desc");
    setSortLabel("Descending")
  };

  const handleSearch = (value) => {
    setSearch(value)
  }

  const sortIcon = sortLabel === "Descending" ? <SortDescendingOutlined /> : <SortAscendingOutlined/>
  return (
    <div style={{ padding: "20px" }}>
      <p style={{ fontWeight: 600, fontSize: "2rem", marginBottom: 0 }}>
        Welcome to Libraryz
      </p>
      <p style={{ marginBottom: "2rem" }}>
        Search from our variaty of books for you to enjoy
      </p>
      <div className="search-container">
        <div className="filter-container">
        <Select
          size="large"
          defaultValue="created_at"
          style={{ width: 150 }}
          onChange={handleSortByChange}
          options={[
            { value: "created_at", label: "Newly Added" },
            { value: "title", label: "Name" },
            { value: "published_date", label: "Published Date" },
          ]}
        />
        <Button width="150px" size="large" icon={sortIcon} onClick={handleSortChange}>{sortLabel}</Button>
        </div>
        <Search onChange={(e) => handleSearch(e.target.value)} className="search-input" size="large" placeholder="Search book ..." style={{width: "100%", minWidth:"150px", maxWidth: "845px"}}/>
      </div>
      <Row>
        {loading && <Skeleton />}
        {data &&
          data.results.map((book, index) => {
            const genres = book.genre.split(",");
            const genre = genres[0];
            return (
              <Col key={index} xs={24} xl={8} lg={12} md={16}>
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        {data && (
          <Pagination
            total={data.totalRecords}
            current={page}
            defaultCurrent={1}
            defaultPageSize={9}
            onChange={handlePageChange}
            hideOnSinglePage
          />
        )}
      </div>
    </div>
  );
};
export default Home;
