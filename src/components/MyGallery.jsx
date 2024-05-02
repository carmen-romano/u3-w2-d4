import { useState, useEffect } from "react";
import { Alert, Col, Placeholder, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyGallery = props => {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (props.nameMovies) {
      showGallery(props.nameMovies);
    }
  }, [props.nameMovies]);
  const showGallery = nameMovies => {
    fetch(
      `http://www.omdbapi.com/?apikey=8034813b&s=${nameMovies}&type=movie&plot=short&page=1`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error("Errore nella fetch");
        }
        return response.json();
      })
      .then(movieData => {
        const sixMovies = movieData.Search.slice(0, 6);
        console.log(sixMovies);
        setMovies(sixMovies);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Errore:", error);
        setIsError(true);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Row className="gap-2">
        {isLoading && (
          <Col className="col-12 mb-4">
            <div className="border-0">
              <Placeholder as="h3" animation="glow">
                <Placeholder xs={12} />
              </Placeholder>
            </div>
          </Col>
        )}

        {isError && <Alert variant="danger">Si è verificato un errore</Alert>}

        {!isLoading && !isError && (
          <>
            <h3 className="mb-4">
              The Best Of
              <strong>
                {" " +
                  props.nameMovies.charAt(0).toUpperCase() +
                  props.nameMovies.slice(1)}
              </strong>
            </h3>
            {movies.map(movie => (
              <Col key={movie.imdbID} className="col-6 col-md-4 col-lg mb-4">
                <div className="border-0">
                  <Link to={`/dettagli/${movie.imdbID}`}>
                    {" "}
                    <img
                      src={movie.Poster}
                      className="w-max-100"
                      alt={movie.Title}
                      draggable="false"
                    />
                  </Link>
                </div>
              </Col>
            ))}
          </>
        )}
      </Row>
    </>
  );
};

export default MyGallery;
