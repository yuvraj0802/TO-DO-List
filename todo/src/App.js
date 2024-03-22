import './App.css';
import React,{useState} from 'react'
import AddTask from './Components/AddTask';

export default function App() {
  const [list,setList] = useState([]);
  function mymainfun(title,description){
    setList([...list,{title:title,description:description}])
    console.log(list);
  }
  function deleteUser(i){
    let newlist = [...list]
    newlist.splice(i,1)
    setList([...newlist]);
  }

  function UpdateUser(i,obj){
    setList(list.map((item,index)=>(i === index ? obj: item)))
  }

  return (

    <div>
      <AddTask mymainfun={mymainfun} list={list} deleteUser= {deleteUser} updateUser={UpdateUser}/>
    </div>

  )
}

