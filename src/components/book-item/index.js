import { Image } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
import toDateString from "utils/toDateString";
import Genre from "components/genre";
const BookItem = (props) => {
  const { title, author, genre, imageUrl, slug, publishedDate } = props;
  
  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <Image
        style={{ borderRadius: "20px", paddingLeft: "0px" }}
        width={200}
        src={imageUrl}
      />
      <div
        style={{ paddingLeft: "20px", paddingRight: "20px", width: "300px" }}
      >
        <Link to={`/books/${slug}`} style={{ color: "black" }}>
          <p style={{ fontSize: "20px", fontWeight: 600, lineHeight: "auto" }}>
            {title}
          </p>
        </Link>
        <p style={{ color: "black", fontSize:"16px" }}>{author}</p>
        <p style={{color: "grey"}}>{toDateString(publishedDate)}</p>
        <Genre genre={genre}/>
      </div>
    </div>
  );
};

export default BookItem;
