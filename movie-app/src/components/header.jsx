import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./navbar";
import { Container, Card } from "react-bootstrap";
import Imdb from '../assets/assets/imdb.svg'
import Tomato from '../assets/assets/tomato.svg'
import Play from '../assets/assets/Play.svg'
const Header = () => {
  const [randomMovie, setRandomMovie] = useState(null);

  async function handleRequest() {
    const API_KEY = "7065b21337079325e725dc5eb5fdce37";
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=john+wick`
      );
      const movies = response.data.results.slice(2,4); // Select movies from index 0 to 4
      const randomIndex = Math.floor(Math.random() * movies.length);
      const selectedMovie = movies[randomIndex];
      setRandomMovie(selectedMovie);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleRequest();
  }, []);
  console.log(randomMovie)

  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <>
    <Container></Container>
      {randomMovie && (
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${imagePath}${randomMovie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
            backgroundPosition: "90% 10%",
            width: "100%",
            height: "32rem",
            position: "relative",
          }}
        >
          <Navigation />
          <Card
            style={{
              width: "22rem",
              backgroundColor: "transparent",
              border: "none",
              color: "white",
            }}
          >
            <Card.Body>
              <Card.Title id="title">{randomMovie.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <img src={Imdb} alt="imdb logo" />{" "}
                <span className="rate">86.0/100 </span>
                <span className="percentage">
                  <img src={Tomato} alt="tomato icon" /> 97%
                </span>
              </Card.Subtitle>
              <Card.Text className="text">{randomMovie.overview}</Card.Text>
              <div className="trailer">
                <img src={Play} alt="" /> WATCH TRAILER
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default Header;
