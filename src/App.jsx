import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './page/Home';
import News from './page/News';
import Contact from './page/Contact';
import About from './page/About'

/* Combine both functions into one App function*/
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <main>
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="News" element={<News />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="About" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}