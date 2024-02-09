
import React from 'react';

function Todo({todos}){
    if (!Array.isArray(todos)) {
      return <div>No todos available</div>;
    }
  
    return <div>
      {todos.map((todo) => {
        return <div key={todo._id}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
          <button>Mark as Complete</button>
          <br/>
          <br/>
        </div>
  
      })}
    </div>
  }

export default Todo;