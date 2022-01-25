import  { useState } from 'react';


function Mytodo() {
   
   const [todo,setTodo] = useState("");

   const [todos,setTodos] = useState([]);

   const onChange = (event) =>{setTodo(event.target.value)} ;

   const onSubmit = (event)=>{
    event.preventDefault();
    if (todo==="") {
      return;
    }

    setTodos((currentArray) => [todo,...currentArray]);
    setTodo("");
  }
   
    return (
        <div className="container py-4">
          <h1> todo list {todos.length} </h1>

          <form onSubmit={onSubmit}>
          <input type="text" onChange={onChange} value={todo}  />
          <button>save</button>
          </form>
          
           <div>
             <ul>
             {todos.map((item,index)=>(<li key={index} >{item}</li>))}
             </ul>
           </div>
        </div>
    );
}

export default Mytodo;
