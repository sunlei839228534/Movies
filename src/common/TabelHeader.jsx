import React, { Component } from 'react'


// columns: array
// sortColumn: object
// onSort: function
class TabelHeader extends Component {
  raiseSort = column => {
    if(column.path && column.label) {
      const sortColumn = {...this.props.sortColumn}
      if(sortColumn.path === column.path ) {
        sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc'
      }else {
        sortColumn.path = column.path
        sortColumn.order = 'asc'
      }
      this.props.onSort(sortColumn)
    }
  }
  renderSortIcon = column => {
    if(column.path !== this.props.sortColumn.path ) return null
    if(this.props.sortColumn.order === 'asc') return <i className="fa fa-sort-asc m-2"></i>
    return <i className="fa fa-sort-desc m-2"></i>

  }

  render() { 
    return (<thead>
      <tr>
        {
          this.props.columns.map(column => (
          <th
          className={column.path && column.label ? 'clickable': ""}
          key={column.path || column.label}
          onClick={() => this.raiseSort(column)}>
            {column.label}{this.renderSortIcon(column)}
          </th>
          ))
        }
      </tr>
    </thead>  );
  }
}
 
export default TabelHeader;