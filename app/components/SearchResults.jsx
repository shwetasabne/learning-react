import React, { PureComponent } from 'react';

export default class SearchResults extends PureComponent {
  render() {
    const data = this.props.data;
    console.log(`Data is ${JSON.stringify(data)}`);
    if (data.length > 0 ) {
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Package Name</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, idx) => {
               return( 
                <tr>
                    <td key={item.name} scope="row">
                      {item.name}
                      <br/>
                      <i>{item.description}</i>
                    </td>
                    <td key={item.score}>{item.score}</td>
                  </tr>
               )
              })
            }
          </tbody>
        </table>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}