import React, { useState, useRef, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  // const [todos, setTodos] = useState([
  //   { id: 0, name: 'clean', complete: false }, 
  //   { id: 1, name: 'sleep', complete: false },
  // ])
  // const todoNameRef = useRef()

  // function handleAddTodo(e) {
  //   const todoName = todoNameRef.current.value
  //   if (todoName == '') return

  //   const newTodos = [...todos]
  //   // const todo = newTodos.find(todo => todo.id == id)
  //   // todo.complete = !todo.complete
  //   setTodos([...newTodos, { id: newTodos.length, name: todoName, complete: true }])

  //   // setTodos(prevTodos => {
  //   //   return [...prevTodos, { id: prevTodos.length, name: todoName, complete: true }]
  //   // })
  //   todoNameRef.current.value = null
  // }

  // function toggleTodo(id) {
  //   const newTodos = [...todos]
  //   const todo = newTodos.find(todo => todo.id == id)
  //   todo.complete = !todo.complete
  //   setTodos(newTodos)
  // }

  // function clearTodoList() {
  //   const newTodos = [...todos].filter(todo => !todo.complete)
  //   setTodos(newTodos)
  // }

  useEffect(() => {
      document.title = 'janoRicky'
  }, []);


  return (
    <div className="wrapper">
      <Navbar />
      <div class="main">
        <div class="main-content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
