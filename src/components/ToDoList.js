import React from 'react'

function ToDoList(props) {
  return (
    <li className='list-item'> {props.item} <span className='icons icon-delete' onClick={e=>{props.deleteItem(props.index)}}><i className= "fa-sharp fa-solid fa-trash"></i></span></li>
  )
}

export default ToDoList