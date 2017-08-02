import React from 'react';

class SearchFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
    };
  }
  render() {
    return (
      <section className="selectionBar">
        {/* // TODO make navbar for component selection */}
        <div className="dropdown">
          <button
            className="dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.state.category}
            <span className="caret" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
          </ul>
        </div>
        {/* <h4>{ this.state.category }</h4> */}
      </section>
    );
  }
}
export default SearchFilters;
