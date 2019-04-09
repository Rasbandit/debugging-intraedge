import React, {Component} from 'react';
import Item from 'item'

export default class Items extends Component {
  render() {
    const items = this.state.groceryList.map((item) => {
      <Item key={item} item={item} />;
    });
    return (
      {items}
    )
  }
}