import React, { useState } from 'react';

export default function Form({items,setItems}){
    //state
  const [newItem,setNewItem ]= useState("");
  //comportement
  const handleSubmit =(event) =>{
    event.preventDefault();
    const id = new Date().getTime();
    const itemToAdd = {id , nom:newItem , complete:false , isEditing:false}
    setItems([...items,itemToAdd]);
    setNewItem("");
  };
  const handleChange=(event) =>{
    setNewItem(event.target.value);
  };
return(
<form  onSubmit={handleSubmit}>
    <input type="text" placeholder='Add a task' value={newItem} onChange={handleChange}/>
    <button type='submit'>Add a</button>
</form>);
}