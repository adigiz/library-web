const genreColors = {
    'A': '#FF5733',
    'B': '#36B55C',
    'C': '#5E99FF',
    'D': '#FFC800',
    'E': '#FF33E1',
    'F': '#AC33FF',
    'G': '#33FFD0',
    'H': '#FF6E33',
    'I': '#33A0FF',
    'J': '#89FF33',
    'K': '#FF33B1',
    'L': '#33FF81',
    'M': '#FF3353',
    'N': '#33FFE1',
    'O': '#FF7E33',
    'P': '#3371FF',
    'Q': '#FF33A4',
    'R': '#33FFC6',
    'S': '#FFD533',
    'T': '#337BFF',
    'U': '#FF33F5',
    'V': '#33FF49',
    'W': '#FF333D',
    'X': '#B633FF',
    'Y': '#FFC933',
    'Z': '#33FF8E'
  };

const Genre = ({genre}) => {
    return (
        <p
          style={{
            paddingRight: "1rem",
            paddingLeft: "1rem",
            paddingTop: "5px",
            paddingBottom: "5px",
            width: "fit-content",
            backgroundColor: genreColors[genre.charAt(0)],
            borderRadius: "20px",
            color: "white",
            textAlign: "center",
          }}
        >
          {genre}
        </p>
    )
}

export default Genre;