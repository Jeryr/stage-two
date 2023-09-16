
                 import React, { useEffect, useState } from "react";
                 import { Card } from "react-bootstrap";
                 import { useParams } from "react-router-dom";
                 import axios from "axios";
                 import Navigation from "../components/navbar";
                 import Footer from "../components/footer";
                 import Play from "../assets/assets/Play.svg";

                 function MovieDetails() {
                   const { id } = useParams();
                   const [movie, setMovie] = useState(null);

                   const imagePath = "https://image.tmdb.org/t/p/original";

                   useEffect(() => {
                     const API_KEY = "7065b21337079325e725dc5eb5fdce37";

                     async function fetchMovieDetails() {
                       try {
                         const response = await axios.get(
                           `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
                         );
                         setMovie(response.data);
                       } catch (error) {
                         console.error(error);
                       }
                     }

                     fetchMovieDetails();
                   }, [id]);

                   return (
                     <>
                       {movie && (
                         <>
                           <div
                             style={{
                               position: "relative",
                               width: "100%",
                               height: "32rem",
                               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${imagePath}${movie.backdrop_path})`,
                               backgroundSize: "contain",
                                backgroundRepeat: "repeat",
                               backgroundPosition: "90% 10%",
                             }}
                           >
                             <Navigation />
                             <div
                               style={{
                                 position: "absolute",
                                 top: "50%",
                                 left: "50%",
                                 transform: "translate(-50%, -50%)",
                                 textAlign: "center",
                               }}
                             >
                               <img
                                 src={Play}
                                 alt=""
                                 style={{
                                   width: "6rem",
                                   marginBottom: "1rem",
                                 }}
                               />
                               <span style={{ color: "white" , fontSize: "2rem"}}>
                                 Watch Trailer
                               </span>
                             </div>
                           </div>
                           <Card>
                             <Card.Body>
                               <Card.Title
                                 data-testid="movie-title"
                                 id="details-title"
                               >
                                 {movie.title}
                               </Card.Title>
                               <Card.Text data-testid="movie-release-date">
                                 {new Date(movie.release_date).toISOString()}
                               </Card.Text>
                               <Card.Text data-testid="movie-runtime">
                                 {movie.runtime}
                               </Card.Text>
                               <Card.Text data-testid="movie-overview">
                                 {movie.overview}
                               </Card.Text>
                               <Card.Text> Tagline : {movie.tagline}</Card.Text>
                             </Card.Body>
                           </Card>
                         </>
                       )}
                       <Footer />
                     </>
                   );
                 }

                 export default MovieDetails;

