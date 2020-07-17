import React,{Component} from 'react'

import _ from 'lodash'

// movies: array
// onCLickLike: func
// onhandleDelete: func

class TabelBody extends Component {
  renderCell = (item,column) => {
    if(column.content) return column.content(item)

    return _.get(item, column.path)
  }

  render() { 
    const {data,columns} = this.props
    return (
      <tbody>
        {data.map(item => {
          return (
          <tr
          key={item[this.props.keyname]}
          >{columns.map(column => <td key={item[this.props.keyname] + column.path}>{this.renderCell(item,column)}</td>)}</tr>
          )
        })}
      </tbody>
    );
  }
}
TabelBody.defaultProps = {
  keyname: "_id"
}
 
export default TabelBody;
