import React, { useState, useEffect } from "react";
import HeaderWithSearchBar from "./HeaderWithSearchBar";
import GenreGrid from "./GenreGrid";
import MovieDetailView from "./MovieDetailView";
import wookieMovies from "../apis/wookieMovies";
import { simplifiedWookieResponseData } from "../utilities/utility";
import Route from "./Route";

//This is the main App called from index.js.

const App = () => {
  // This function returns JSX which displays Search Bar and Movie List categorized by Genre.
  const _showRootView = (
    onTermSubmit,
    genreCategory,
    setCurrentMovieId,
    loading,
    setLoading
  ) => {
    return loading ? (
      <div className="ui container">
        <HeaderWithSearchBar
          loading={loading}
          setLoading={setLoading}
          onFormSubmit={onTermSubmit}
        />
        <div className="ui padded loading segment"></div>
      </div>
    ) : (
      <div className="ui container">
        <HeaderWithSearchBar
          loading={loading}
          setLoading={setLoading}
          onFormSubmit={onTermSubmit}
        />
        {genreCategory.categories.length > 0 && (
          <div>
            <div className="ui segment">
              {genreCategory.categories.map((catg) => {
                return (
                  <GenreGrid
                    key={catg.name}
                    catgName={catg.name}
                    thumbnailList={catg.posters}
                    setCurrentMovieId={setCurrentMovieId}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };
  const [moviesObj, setMovies] = useState({ movies: [] }); //This state stores the Movies array received from API
  const [currentMovieId, setCurrentMovieId] = useState(""); //This state stores the current movie object selected for detail view
  const [loading, setLoading] = useState(false);

  const [genreCategory, setGenreCategory] = useState({ categories: [] }); // This state stores the simplified & converted Movie array received from API
  const onTermSubmit = async (term) => {
    const response = await wookieMovies.request({
      params: {
        q: term,
      },
    });
    let newMoviesObj = {
      movies: response.data && response.data.movies ? response.data.movies : [],
    };
    setMovies(newMoviesObj);
    setGenreCategory(simplifiedWookieResponseData(response.data.movies));
    setLoading(false);
  };

  return (
    <React.Fragment>
      <Route path="/">
        {_showRootView(
          onTermSubmit,
          genreCategory,
          setCurrentMovieId,
          loading,
          setLoading
        )}
      </Route>
      <Route path="/detail">
        <MovieDetailView
          moviesArray={moviesObj.movies}
          currentMovieId={currentMovieId}
        />
      </Route>
    </React.Fragment>
  );
};

export default App;
