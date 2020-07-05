import React from 'react';
import axios from 'axios';
import Movie from '../components/movie';
import './Home.css';
import {} from 'react-router-dom';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getmovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating',
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getmovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                rating={movie.rating}
                genres={movie.genres}
              ></Movie>
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
