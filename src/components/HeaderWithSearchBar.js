/** This APP generates SearchBar used to search movies.
 * It implements simple form submit event to submit search term.
 */

import React from "react";

class HeaderWithSearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
    this.props.setLoading(true);
  };
  render() {
    return (
  
      <div className="ui center aligned inverted segment">
        <div className="ui search">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="ui action input">
              <input
                type="text"
                placeholder="Search movies..."
                value={this.state.term}
                onChange={this.onInputChange}
              />
              <button className="ui icon button">
                <i className="search icon"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default HeaderWithSearchBar;
