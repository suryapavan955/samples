import './App.css';
import { useState } from 'react';

const array =[
  {id:1 , Name:"Polo"},
  {id:2 , Name:"Puma"},
  {id:3 , Name:"PeterEngland"},
  {id:4 , Name:"Teamspirit"},
  {id:5 , Name:"Nike"},
]


function App() {

  const [list,setList] =useState('');
 
 

const filtered= list ? array.filter(item=> 
  item.Name.toLocaleLowerCase().includes(list.toLocaleLowerCase())
) : array;


  return (
    <>
      <input value={list} onChange={ (e) => setList(e.target.value) } placeholder='Enter the value' />
      <button >Add me to cart</button>

      {/* {
        array.map ((item)=>(
          <p key ={item.id}>{item.Name}</p>
        ))
      } */}

      <div>{
        filtered.map((item) => (
        <p key ={item.id}>{item.Name}</p>
        ))
      }
 
      </div>

    </>
  );
}

export default App;
