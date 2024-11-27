import { useState } from 'react'
import './App.css'
import Nav from  './components/Nav'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <Nav />
      <Content />
      <Footer />
    </div> )
}

export default App
