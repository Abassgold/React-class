import React, {useState} from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Hero from './Components/Hero'
import Nig from './Components/Nig'
import Footer from "./Components/Footer";
import Todo from './Components/Todo'
import DisplayTodo from './Components/DisplayTodo'
import Notfound from './Components/Notfound'
import Param from './Components/Param'
import Feed from './Components/Feed'
import Library from './Components/Library'
import Formik from './Components/Formik'

const App = () => {
  const [allTodo, setallTodo] = useState([])

  const addTodo = newTodo =>{
    setallTodo([...allTodo, newTodo])
  }
  return (
    <div>
      {/* <Todo addTodo={addTodo}/>
      <DisplayTodo allTodo={allTodo}/> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/event' element={<Event/>}/>
        <Route path='/home' element={<Navigate to='/'/>}/>
        <Route path='/Body' element={<Nig />} />
        <Route path='/Footer' element={<Footer />} />
        <Route path='/feed*' element={<Feed/>}/>
        <Route path="/feed/library" element={<Library/>}/>
        <Route path='/param/:id' element={<Param/>}/>
        <Route path='/formik' element={<Formik/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
  )
}

export default App