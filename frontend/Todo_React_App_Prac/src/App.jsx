import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Todo from './components/Todo'
import CreateTodos from './components/createTodos'

function App() {
  const [todos, setTodos] = useState([])

  
  useEffect(() => {
    axios.get('http://localhost:3000/todos')
    .then((res) => {
      setTodos(res.data.todos);
    })
    .catch(error => {
      console.error('There was an error!', error);
    })

  },[])

  return (
    <>

      <CreateTodos handleSubmit={(e) => handleSubmit(e, fetchData)}/>
      <hr />

      <Todo todos={todos}/>
        
    </>
  )
}

export default App
