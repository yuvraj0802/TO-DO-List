import React, { useState } from 'react'
import Dialog from './Dialog'
import ListedData from './ListedData'; 

export default function AddTask(props) {
    const [show,setShow] = useState(false);
    const [showL,setShowL] = useState(false);
    
    function myfun(val,title,description){
        setShowL(val)
        setShow(false);
        props.mymainfun(title,description);
    }
  return ( 
    <>
        <button style={{backgroundColor:"purple",color:"white"} } className='addButton'
        onClick={()=>setShow(!show)}>Add Task</button>
        {
            show?<Dialog myfun = {myfun}/>:" "
        }
        
        {
            showL?<ListedData list={props.list} deleteUser={props.deleteUser} updateUser={props.updateUser}/>:" "
        }
    </>
  )
}
