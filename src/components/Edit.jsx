import React, { useState } from 'react';

export default function Edit({items,setItems,editItem,item}){
    //state
  const [newItem,setNewItem ]= useState("");
  //comportement
  const handleSubmit =(event) =>{
    event.preventDefault();
    editItem(newItem,item.id);
    setNewItem("");
  };
  const handleChange=(event) =>{
    setNewItem(event.target.value);
  };
return(
<form  onSubmit={handleSubmit}>
    <input type="text" placeholder='edit..' value={newItem} onChange={handleChange}/>
    <button type='submit' >update</button>
</form>
);
}

