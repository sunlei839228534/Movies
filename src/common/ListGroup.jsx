import React from 'react';

const ListGroup = ({ items, onItemSelected,valueProperty,textProperty,selectedItem}) => {
  return (
    <ul className="list-group">
      {items.map(item => {
        return (
          <li
          key={item[valueProperty]}
          className={selectedItem.name === item.name ? "list-group-item active": "list-group-item"}
          onClick={() => {
            onItemSelected(item)
          }}
          >{item[textProperty]}</li>
        )
      })}
    </ul>
  )
}

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
}

export default ListGroup