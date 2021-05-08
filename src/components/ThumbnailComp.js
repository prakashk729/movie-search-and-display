/** This APP displays the individual clickable
 * thumbnail
 */

import React from "react";
import Link from "./Link";

const ThumbnailComp = (props) => {
  return (
    <div>
      <div className="ui segment">
        <Link
          imgSrc={props.imgSrc}
          setCurrentMovieId={props.setCurrentMovieId}
          href="/detail"
          alt="img-not-found"
        >
          <img
            className="ui small image"
            src={props.imgSrc["url"]}
            alt="Img-not-found"
          />
        </Link>
      </div>
    </div>
  );
};

export default ThumbnailComp;
