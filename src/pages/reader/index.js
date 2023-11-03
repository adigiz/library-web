import { useState } from "react"
import { ReactReader } from "react-reader"
import { useLocation } from "react-router-dom";

const BookReader = () => {
    const location = useLocation();
    const [position, setPosition] = useState(0)
    return (
      <div style={{ height: '100vh' }}>
        <ReactReader
          swipeable
          showToc={false}
          url={location.state.fileUrl}
          location={position}
          locationChanged={(epubcfi) => setPosition(epubcfi)}
        />
      </div>
    )
}

export default BookReader;