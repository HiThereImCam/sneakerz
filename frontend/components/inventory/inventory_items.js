import React, { Component, Fragment, Link } from "react";

class InventoryItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { sneakerItem } = this.props;
    return (
      <div className="ProductItem-list">
        {sneakerItem.size}M ${sneakerItem.price}
      </div>
    );
  }
}

export default InventoryItems;
