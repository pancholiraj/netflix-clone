import React, { useEffect, useState } from "react";
import "./Row.css";
import instance from "./axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    // console.table(movie);
    setTrailerUrl("");
    movieTrailer(movie?.title || "")
      .then((url) => {
        if (!url) {
          alert("Trailer Not Found");
        }
        const urlParams = new URLSearchParams(new URL(url).search);
        const videoCode = urlParams.get("v");
        console.log(videoCode);
        setTrailerUrl(videoCode);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${imageBaseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
