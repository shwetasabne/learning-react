import React, { PureComponent } from 'react';

export default class SearchBar extends PureComponent {

  state = {
    searchTerm: ''
  };

  formPreventDefault = e => {
    e.preventDefault();
  }

  onChangeHandler = e => {
    e.preventDefault();
    console.log(`Starting to set the value of searchTerm`)
    this.setState({ searchTerm: e.target.value })
    console.log(`SearchTerm value has been set`)
  }

  onFormSubmit = () => {
    console.log(`In onFormSubmit, props are ${JSON.stringify(this.props)} and state is ${JSON.stringify(this.state)}`)
    const { onFormSubmit } = this.props;
    console.log(`onFormSubmit is ${onFormSubmit}`)
    const { searchTerm } = this.state;
    if (onFormSubmit) onFormSubmit(searchTerm);
  }

  render() {
    return (

      <form onSubmit={this.formPreventDefault}>
        <div className="input-group">
          <input type="text" className="form-control" value={this.state.searchTerm} onChange={this.onChangeHandler} placeholder="Search for..." />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this.onFormSubmit}>Go!</button>
          </span>
        </div>
      </form>

    );
  }
}