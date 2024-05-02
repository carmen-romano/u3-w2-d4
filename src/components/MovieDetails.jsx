import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=8034813b&i=${movieId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Errore nella fetch");
        }
        return response.json();
      })
      .then(movieData => {
        setMovie(movieData);
      })
      .catch(error => {
        console.error("Errore:", error);
      });
  }, [movieId]);

  return (
    <>
      {!movie ? (
        <Spinner
          animation="border"
          role="status"
          className="justify-content-center"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="mt-4 text-light text-center mb-5">
              <h1>{movie.Title}</h1>
              <p>{movie.Plot}</p>
              <p>Anno: {movie.Year}</p>
              <p>Regista: {movie.Director}</p>
              <p>Genere: {movie.Genre}</p>
              <p>Valutazione: {movie.imdbRating}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </Col>
            <Col md={4} className="mt-4 text-light text-center mb-5">
              <Comment asin={movie.imdbID} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default MovieDetails;
