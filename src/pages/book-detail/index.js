import { Button, Image, Skeleton } from "antd";
import { useFetch } from "hooks/useFetch";
import { Link, useParams } from "react-router-dom";

import './index.css';
import Genre from "components/genre";
const BookDetail = () => {
  const { slug } = useParams();
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_SITE}/books/${slug}`
  );

  return (
    <div className="book-detail">
      {loading && <Skeleton />}
      {data && (
        <div className="book-image-container">
          <Image
            preview={false}
            className="book-image"
            width={300}
            src={data.imageurl}
          />
          <Link to={`/books/${slug}/read`} state={{ fileUrl: data.fileurl }}>
            <Button className="book-image__button" block size="large">Read Now</Button>
          </Link>
        </div>
      )}
      {data && (
        <div
          className="book-content"
        >
          <p style={{ fontSize: "30px", fontWeight: 800 }}>
            {data.title}
          </p>
          <div style={{ display: "flex", gap: "10px", overflow: "auto"}}>
            { data.genre.split(",").map((g) => <Genre genre={g}/>)}
          </div>
          <p style={{ color: "grey" }}>by {data.author}</p>
          <p style={{ fontSize: "20px", fontWeight: 600 }}>Synopsis</p>
          <p style={{fontSize: "16px"}}>{data.synopsis}</p>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
