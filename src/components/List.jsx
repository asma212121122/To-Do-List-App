import React, { useState } from 'react';

export default function List(props){
    const item = props.item;
    const onItemDelete = props.onItemDelete;
    const onItemDone = props.onItemDone;
    const editItem = props.editItem;
    return (
        <li className={item.complete ? 'done' : ''} key={item.id}>
        <div  className='div' onClick={() => onItemDone(item.id)}>{item.nom}</div>
        <div className="buttons">
          <button onClick={() => editItem(item.id)}>Edit</button>
          <button onClick={() => onItemDelete(item.id)}>X</button>
        </div>
      </li>);
}