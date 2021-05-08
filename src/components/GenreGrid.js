/** This APP creates a single genre categorized group of
 ** movies. It internally uses 'ThumbnailComp' to render
 ** list of movies under the current genre category passed
 ** as prop from parent App.
 */

import React from "react";

import ThumbnailComp from "./ThumbnailComp";

const GenreGrid = ({ catgName, thumbnailList = [], setCurrentMovieId }) => {
  return (
    <div className="ui padded brown inverted segment">
      <div className="ui large purple label segment">{catgName}</div>
      <div>
        <div className="ui grid">
          {thumbnailList.length > 0
            ? thumbnailList.map((thumbnail) => {
                return (
                  <ThumbnailComp
                    key={thumbnail["url"]}
                    imgSrc={thumbnail}
                    setCurrentMovieId={setCurrentMovieId}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default GenreGrid;
