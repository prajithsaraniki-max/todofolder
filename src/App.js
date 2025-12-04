import React from 'react'
import './App.css';


const App = () => {

const[input,setInput]=React.useState('')
const[todos,setTodos]=React.useState([])

const [editindex,setEditindex]=React.useState(null)
const[editText,setEditText]=React.useState('')



function add(){
  setTodos([...todos,input])
  setInput('')
  console.log(todos);

}

function startedit(index){
  setEditindex(index) //0 
  setEditText(todos[index])//exercise
}


function saveedit(index){
  let temp=[...todos]
  temp[editindex]=editText
  setTodos(temp)
  setEditindex(null)
}

function del(index){
  setTodos(todos.filter((v,i)=>i!==index))
  
} 

  return (
    <div className='container'>      
      <input type='text' value={input} placeholder='Enter the todo' onChange={(e)=>setInput(e.target.value)} /><br/>
      <button onClick={add}>Add</button> 

      {
        <ul>
          {todos.map((i,index)=>
          <li key={index}>

            {i}
                 
              {editindex===index ?
                (<>
                    <input type='text' onChange={(e)=>setEditText(e.target.value)}/>
                    <button onClick={saveedit} >save</button><br/>
                </>) :
                (<>
                    <button onClick={()=>startedit(index)}>Edit</button>
                    <button onClick={()=>del(index)}> Delete</button>
                </>
                )}

            </li>)}
        </ul>
      }

    </div>
  )
}

export default App
