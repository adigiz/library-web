import { Image } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
import toDateString from "utils/toDateString";
import Genre from "components/genre";
const BookItem = (props) => {
  const { title, author, genre, imageUrl, slug, publishedDate } = props;
  
  return (
    <div className="book-item">
      <Image
        width={200}
        src={imageUrl}
        className="book-item-image"
      />
      <div
        style={{ paddingLeft: "20px", paddingRight: "20px", width: "300px" }}
      >
        <Link to={`/books/${slug}`} style={{ color: "black" }}>
          <p className="book-item-title">
            {title}
          </p>
        </Link>
        <p className="book-item-author">{author}</p>
        <p style={{color: "grey"}}>{toDateString(publishedDate)}</p>
        <Genre genre={genre}/>
      </div>
    </div>
  );
};

export default BookItem;
