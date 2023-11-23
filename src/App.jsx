import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {


  const [bookmarks,setBookmarks]=useState([]);

const handleBookmark=blog=>{
  const newBookmark=[...bookmarks,blog];
  setBookmarks(newBookmark)
}


  return (
    <>
      
      <Header></Header>


      <div className='md:flex max-w-7xl mx-auto'>

      <Blogs handleBookmark={handleBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      
     
    </>
  )
}

export default App
