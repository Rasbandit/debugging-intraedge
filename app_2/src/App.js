import React, { Component } from 'react';
import Items from './Items'

class App extends Component {
  constuctor() {
    super();
    this.state = {
      groceryList: ['apples', 'bread', 'milk', 'cheetos']
    };
  }

  render() {

    return (
      <div className="">
        <h1>Grocery List</h1>
        <Items list={this.state.groceryList}/>
      </div>
    );
  }
}

export default App;
