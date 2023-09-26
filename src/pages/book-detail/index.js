import { Image, Skeleton } from "antd";
import { useFetch } from "hooks/useFetch";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { slug } = useParams();
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_SITE}/books/${slug}`
  );

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      {loading && <Skeleton />}
      {data && (
        <Image
          preview={false}
          style={{ borderRadius: "20px", paddingLeft: "0px" }}
          width={300}
          src={data.cover}
        />
      )}
      {data && (
        <div
          style={{ paddingLeft: "20px", paddingRight: "20px", width: "80%" }}
        >
          <p style={{ fontSize: "30px", fontWeight: 800, lineHeight: "0px" }}>
            {data.title}
          </p>
          <p style={{ color: "grey" }}>by {data.author}</p>
          <p style={{ fontSize: "18px", fontWeight: 600 }}>Synopsis</p>
          {data.synopsis.split("\\n").map((text) => (
            <>
              {text}
              <br />
              <br />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookDetail;
