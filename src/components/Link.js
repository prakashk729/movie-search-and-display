/** This APP simply makes the ThumbnailComp clickable.
 * "props.children" refers to the ThumbnailComp component instance.
 */

import React from "react";

const Link = (props) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    props.setCurrentMovieId(props.imgSrc["movieId"]);
    window.history.pushState({}, "", props.href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={handleOnClick} href={props.href}>
      {props.children}
    </a>
  );
};

export default Link;
