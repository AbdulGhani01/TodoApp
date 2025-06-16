import React, { useState } from 'react'


const Todo = () => {
        const [input, setInput] = useState('');
        const [completeTodos, setCompleteTodos ] = useState([]);
        const [incompleteTodos, setIncompleteTodos ] = useState([]);
        const handleClick = () => {
            setIncompleteTodos( [...incompleteTodos, input]);
            setInput('')
            
        
        }

       const markAsComplete = (todo) => {
                const newTodo =  incompleteTodos.find(t => t === todo);
                setCompleteTodos( [...completeTodos, newTodo]);
                setIncompleteTodos((incompleteTodos) => incompleteTodos.filter(t => t !== newTodo))
    
            }
    
            const removeTodo = (todo) => {
                setCompleteTodos((completeTodos) => completeTodos.filter(t => t !== todo) )
            }
    
  return (
    <div>
      <div className='border border-gray-500 p-5 w-1/4 m-5 rounded-sm mx-auto text-center flex flex-col mb-20'>
           <input className='focus:outline-0 bg-white p-1 mt-5 text-black ps-2 rounded-sm  border' type="text" value={input} onChange={(e) => setInput(e.target.value)} />  
            <button className='m-5 border w-1/2 mx-auto p-2 rounded-sm  cursor-pointer hover:bg-white hover:border-gray-500 hover:text-black '  onClick={() => handleClick()}>New Todo</button>
      </div>
         

           <div className='flex flex-row w-full border border-gray-500 py-5 px-20'>
                <div className='w-1/2'> <h1 className='text-3xl text-center'>Complete Todos</h1>
                
               { completeTodos.map((todo) => (
                       
                      <div  className='p-5 flex align-middle justify-between'>
                                 <p key={Math.random()} >{todo}</p>
                    <button className='border px-3 py-1 rounded-sm cursor-pointer hover:bg-white hover:border-gray-500 hover:text-black ' onClick={() => removeTodo(todo)}>Remove</button> 
                      </div>
                      
                    
                
                ))}</div>
                <div className='w-1/2 border-s border-s-gray-500 ps-10'>
<h1 className='text-3xl text-center'>Incomplete Todos</h1>
                
               { incompleteTodos.map((todo) => (<div className='p-5 flex align-middle justify-between'>
                <p className='' key={Math.random()} >{todo}  </p>
                      <button className='border px-3 py-1 rounded-sm cursor-pointer hover:bg-white hover:border-gray-500 hover:text-black ' onClick={() => markAsComplete(todo)}> Mark As Complete</button>
               </div>
                    
                ))}

                </div>
               
            </div>

    </div>
  )
}

export default Todo