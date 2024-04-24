import { POSTER_URL_PREFIX } from "../../App";
import { Movie } from "../../models";
import styles from "./MoviePreview.module.css";

const MovieStars = ({ score }: { score: number }) => {
  return <div className={styles.stars}>
    {[...Array(5)].map((_, index) => {
      return <div className={`${index <= score/2 ? styles.yellow : styles.black
        }`}> ★</div>
    })}
  </div>
}


const MoviePreview = ({ movie }: { movie: Movie }) => {
  const goToMovieDetails = () => {
    // A DEFINIR EXPERT
  };

  return <div className={styles.movieCard} onClick={goToMovieDetails}>
    <img
      className={styles.moviePicture}
      src={POSTER_URL_PREFIX + movie.poster_path} />
    {movie.title}
    <MovieStars score={movie.vote_average / 2} />
  </div>;
};

export default MoviePreview;
