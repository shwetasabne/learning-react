import $ from 'jquery';
import React, { PureComponent } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

export default class App extends PureComponent {

//    static displayName = 'App';
  state = {
    data: []
  };

  onFormSubmitButton = (val) => {
    console.log(`Obtained the value ${val}`)
    this.setState({
      data: [
        {
          name: 'express',
          description: 'Nice package so sweet total best',
          score: 100
        },
        {
          name: val,
          description: 'User data',
          score: 99
        }
      ]
    });
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <SearchBar onFormSubmit={this.onFormSubmitButton} />
          </div>
        </div>
        <div className="row">
          <hr/>
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <SearchResults data={this.state.data} />
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    );
  }
}

