/** This utility method converts the 'movies' object from
 * the API's response to a simplified array of movie objects categorized by
 * genre and returns it. By doing this, is becomes very simple to map genre-categorized
 * view on the UI.
 */

export const simplifiedWookieResponseData = (data = []) => {
  console.log("inside utility." + data.length);
  let convertedResponse = { categories: [] };

  if (data.length > 0) {
    data.map((d) => {
      d.genres.map((genre) => {
        let categoryExist = convertedResponse.categories.findIndex((i) => {
          return i.name === genre;
        });

        if (categoryExist === -1) {
          let newCategory = {
            name: genre,
            posters: [].concat({ url: d.poster, movieId: d.id }),
          };
          convertedResponse.categories.push(newCategory);
        } else {
          convertedResponse.categories[categoryExist].posters.push({
            url: d.poster,
            movieId: d.id,
          });
        }
        return true;
      });
      return true;
    });
  }

  return convertedResponse;
};
