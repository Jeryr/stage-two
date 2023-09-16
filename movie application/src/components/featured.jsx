import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Row, Col } from "react-bootstrap";
import Imdb from "../assets/assets/imdb.svg";
import Tomato from "../assets/assets/tomato.svg";
import Favourite from "../assets/assets/Favorite.svg";
import { Link, Outlet } from "react-router-dom";

function Featured() {
  const [movies, setMovies] = useState(null);

  async function handleRequest() {
    const API_KEY = "7065b21337079325e725dc5eb5fdce37";
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
      );
      const moviesArr = response.data.results.slice(0, 10).map((movie) => ({
        ...movie,
        isFavourite: false,
      }));
      setMovies(moviesArr);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleRequest();
  }, []);

  const imagePath = "https://image.tmdb.org/t/p/original";

  const handleFavourite = (movieId) => {
    setMovies((previousMovies) =>
      previousMovies.map((movie) =>
        movie.id === movieId
          ? { ...movie, isFavourite: !movie.isFavourite }
          : movie
      )
    );
  };

  return (
    <Container>
      <div className="see">
        <p id="featured-movie">Featured Movie </p>
        <p id="see-more">See More </p>
      </div>
      <Row>
        {movies &&
          movies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3} xl={3}>
              <Link to={`/movie/${movie.id}`} id='link'>
                <Card data-testid="movie-card" id="featured-card">
                  <Card.Img
                    variant="top"
                    src={`${imagePath}${movie.poster_path}`}
                    alt={movie.title}
                    data-testid="movie-poster"
                    style={{ position: "relative" }}
                  />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      zIndex: 1,
                      fill: movie.isFavourite ? "red" : "gray",
                    }}
                    onClick={() => handleFavourite(movie.id)}
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>

                  <Card.Body>
                    <Card.Title data-testid="movie-title" id="featured-title">
                      {movie.title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      <img src={Imdb} alt="imdb logo" />{" "}
                      <span className="featured-rate">
                        {movie.vote_average}/10
                      </span>
                      <span className="featured-percentage">
                        <img src={Tomato} alt="tomato icon" /> 95%
                      </span>
                    </Card.Subtitle>
                    <Card.Text data-testid="movie-release-date">
                      {new Date(movie.release_date).toISOString()}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              <Outlet />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Featured;
