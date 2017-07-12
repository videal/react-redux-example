import React, { Component } from 'react'
import Row from './row'

class PriceTable extends Component {

  getSortType(prevType) {
    switch (prevType) {
      case '': return 'lifo';
      case 'lifo': return 'fifo';
      case 'fifo': return 'lifo';
      default: return '';
    }
  }

  sortById() {
    let sortType = this.getSortType(this.props.data.sortType);
    this.props.actions.sortResults(sortType, 'id');
  }

  sortByPrice() {
    let sortType = this.getSortType(this.props.data.sortType);
      this.props.actions.sortResults(sortType, 'price');
  }

  sortBySize() {
    let sortType = this.getSortType(this.props.data.sortType);
      this.props.actions.sortResults(sortType, 'size');
  }

  render() {
    const data = this.props.data.exampleData;
    const sortType = this.props.data.sortType;
    const sortField = this.props.data.sortField;

    return (
      <table>
        <thead>
          <tr>
            <th><a onClick={this.sortById.bind(this)}>#</a></th>
            <th><a onClick={this.sortByPrice.bind(this)}>A: Price</a></th>
            <th><a onClick={this.sortBySize.bind(this)}>B: Size</a></th>
            <th>C: Owner</th>
          </tr>
        </thead>
        <tbody>
          {this._rows(data, sortType, sortField)}
        </tbody>
      </table>
    )
  }

  sortData (data, sortType, sortField) {
      switch (sortType) {
          case 'lifo':
              data.sort((a, b) => {
                  if (a[sortField] < b[sortField])
                      return -1;
                  if (a[sortField] > b[sortField])
                      return 1;
                  return 0;
              });
              return data;
          case 'fifo':
              data.sort((a, b) => {
                  if (a[sortField] < b[sortField])
                      return 1;
                  if (a[sortField] > b[sortField])
                      return -1;
                  return 0;
              });
              return data;
          default:
              return data;
      }
  }

  _rows(data, sortType, sortField) {
    let sortedData;

    if(sortType && sortField) {
        sortedData = this.sortData(data, sortType, sortField);
    } else {
        sortedData = data;
    }

    const rows = sortedData.map((d) => {
      return(<Row key={d.id} attrs={d} />)
    });
    const isEmpty = Array.isArray(rows) && rows.lenght === 0;
    return (isEmpty ? null : rows)
  }

}

export default PriceTable
