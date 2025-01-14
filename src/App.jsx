
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'
import AddPost from './components/AddPost/AddPost'
import Search from './components/Search/Search'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path="/" element={ <Home/>} />
      <Route path="/register" element={ <Register/>} />
      <Route path="/login" element={ <Login/>} />
      <Route path="/profile/:id" element={ <Profile/>} />
      <Route path="/addPost" element={ <AddPost/>} />
      <Route path="/search/:name" element={ <Search/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
