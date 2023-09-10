import { Image } from "antd";
const BookItem = ({ title, author, genre, imageUrl }) => {
  return (
    <div style={{ display: "flex", marginLeft: "20px", marginTop: "20px" }}>
      <Image
        style={{ borderRadius: "20px", paddingLeft: "0px" }}
        width={200}
        src={imageUrl}
      />
      <div
        style={{ paddingLeft: "20px", paddingRight: "20px", width: "300px" }}
      >
        <p style={{ fontSize: "28px", fontWeight: 800, lineHeight: "auto" }}>
          {title}
        </p>
        <p style={{ color: "grey" }}>{author}</p>
        <p
          style={{
            paddingRight: "1rem",
            paddingLeft: "1rem",
            paddingTop: "5px",
            paddingBottom: "5px",
            width: "fit-content",
            backgroundColor: "blue",
            borderRadius: "20px",
            color: "white",
            textAlign: "center",
          }}
        >
          {genre}
        </p>
      </div>
    </div>
  );
};

export default BookItem;
