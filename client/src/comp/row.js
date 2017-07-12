import React, { Component } from 'react'

class Row extends Component {

    /**
     * Get the css class name according to the price value
     * @param price
     * @returns {*}
     */
    getClassName(price) {
        if (price > 200) {
            return 'font-red';
        } else if (price < 100) {
            return 'font-green';
        }
    }

  render() {
    const row = this.props ? this.props.attrs : {};
    return (
      <tr className="row-component">
        <td>{row.id}</td>
        <td className={this.getClassName(row.price)}>{row.price}</td>
        <td>{row.size}</td>
        <td>{row.owner}</td>
      </tr>
    )
  }
}

export default Row
