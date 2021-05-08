/** This APP displays the detail view at URL '<hostname:port>/detail' when
 * a particular Thumbnail is clicked.
 */

import React from "react";

const MovieDetailView = ({ moviesArray, currentMovieId }) => {
  const currentMovieObj = moviesArray.find((movie) => {
    return currentMovieId === movie.id;
  });
  return (
    <div className="ui segment">
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img className="ui medium image" src={currentMovieObj.poster} />
          </div>

          <div className="content">
            <div className="header">{currentMovieObj.title}</div>
            <div>
              <i class="star icon">{currentMovieObj.imdb_rating}</i>
            </div>

            <div className="extra">
              Year: {new Date(currentMovieObj.released_on).getFullYear()} |
              Length: {currentMovieObj.length} | Director:{" "}
              {currentMovieObj.director}{" "}
            </div>
            <div className="extra">Cast: {currentMovieObj.cast.join(", ")}</div>
            <div className="meta">
              <span>
                <span className="ui label">Movie Description:</span>
                {currentMovieObj.overview}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailView;
