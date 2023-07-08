import React, { useState } from 'react'
import "./App.css"

import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText)=>{
    setListTodo([...listTodo,inputText]);
  }

  const deleteListItem =(key)=>{
    let deletedList = [...listTodo];
    deletedList.splice(key,1);
    setListTodo([...deletedList])
  }

  return (    
    <div className="main-container">
      <div className="center-container">
        <ToDoInput addList = {addList}/>
        <h1 className='app-heading'>To DO</h1>
        <hr/>
        {
          listTodo.map((listItem,i)=>{
            return (
              <ToDoList key ={i} item={listItem} index = {i} deleteItem = {deleteListItem}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default App