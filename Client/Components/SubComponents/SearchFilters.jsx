import React from 'react';

class SearchFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
      region: 'region',
    };
    this.crafts = ['wood', 'metal', 'ceramic', 'glass', 'paper', 'basketry', 'jewelry', 'textiles', 'other'];
    this.regions = ['North America', 'Central/South America', 'Europe', 'Africa', 'Asia', 'Austraila'];
    this.categorySelect = this.categorySelect.bind(this);
    this.regionSelect = this.regionSelect.bind(this);
  }
  categorySelect(e) {
    const category = e.target.value;
    this.setState({
      category,
    });
  }
  regionSelect(e) {
    const region = e.target.value;
    this.setState({
      region,
    });
  }
  render() {
    return (
      <section className="selectionBar">
        <select
          value={this.state.category}
          onChange={this.categorySelect}
          className="dropdown dropBox"
        >
          {this.state.category}
          <span className="caret" />
          <option
            className="dropdownItem"
            value={this.state.category}
          >{this.state.category}</option>
          {this.crafts.map(craft => (
            <option className="dropdownItem" value={craft} >{craft}</option>
            ))}
        </select>
        <div>Filter by region:</div>
        <select
          value={this.state.category}
          onChange={this.regionSelect}
          className="dropdown dropBox"
        >
          {this.state.category}
          <span className="caret" />
          <option className="dropdownItem" value={this.state.region} >{this.state.region}</option>
          {this.regions.map(region => (
            <option className="dropdownItem" value={region} >{region}</option>
          ))}
        </select>
      </section>
    );
  }
}
export default SearchFilters;
