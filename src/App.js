import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  let initTodo;
  const [st, setSt] = useState(false)
  const [arr, setArr] = useState([])
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log("i'm on delete", todo);
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) sno = 1;
    else { sno = todos[todos.length - 1].sno + 1 }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
  }
  const [todos, setTodos] = useState(initTodo)

  const searchTodo = (searchTerm) =>{
    
    let ar = todos.filter((i)=>i.title.includes(searchTerm))
    setSt(true);
    setArr([...ar])
  }
  const reset = ()=>{
    setSt(false)
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])




  return (
    <>
      <Router>
        <Header title={'Todo List'} searchTodo={searchTodo} reset={reset}/>

        <Routes>
          <Route exact path="/" element={ <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={ st?arr:todos} onDelete={onDelete} />
              </>}>
              </Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
