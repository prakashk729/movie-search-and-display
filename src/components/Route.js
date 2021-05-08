/** This APP simply displays main view & detail view based
 * on the current URL path. It receives onLocationChange custom
 * event stating that the navigation link has changed, so it
 * re-renders based on 'setCurrentPath' method call. 'children'
 * variable refers to the main component/detail component
 */

import React, { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return window.location.pathname === path ? children : null;
};

export default Route;
