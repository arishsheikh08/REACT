import React from "react";

const TodoList = ({todos,setTodos }) => {

const handleComplete = (todo) => {
    setTodos(
        todos.map((item) => {
            if (item.id === todo.id) {
                return {...item , completed: !item.completed}
            }
            return item;
        }
        )
    )
}







    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !==id));
    }
    return (
        <div>
            <h3>List of todo items</h3>
        
         {todos.map((todo) => (
             <li className= "list-item" 
             key={todo.id}>



                 <input 
                 type="text"
                 value={todo.title}
                  className={'list $ {todo.completed ? "complete" : "" }'}
                  onChange={(event) => event.preventDefault()} 
                  />
                  <span>{todo.task}</span>
              {todo.completed ? (<button onClick= {() => handleDelete(todo)} >Delete</button>) : null}
              
                  <div>
                      <button className= "button-complete task-button" 
                       onClick={() => handleComplete(todo )} > Complete
                      </button>

                      

                   

                  </div>

             </li>
         )
         )}
        </div>
    )
}
export default TodoList;