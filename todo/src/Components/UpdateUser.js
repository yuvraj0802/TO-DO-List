import React, { useState } from 'react'

export default function UpdateUser(p) {
  const [data, setData] = useState();
  const [description,setDescription] = useState();

  function handleUpdate(){
    console.log("calling update")
    const obj = {title:data,description:description}
    p.updateUser(p.id,obj)
  }
  return (
    <div>
      <div>
        <h3>title</h3>
        <input type='text' onChange={(e) => setData(e.target.value)} placeholder='update title'></input>
        <br />
        <h3>Description</h3>
        <textarea rows="5" cols="31"  value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        <br />
        <button onClick={()=>{p.handleShow();handleUpdate()}}>Update</button>
      </div>
    </div>
  )
}
