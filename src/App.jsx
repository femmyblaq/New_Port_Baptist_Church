import { ThemeProvider } from './context/ThemeContext'
import './App.css'
import TopNavbar from "./components/TopNavbar"
import Preloader from './components/Preloader'
import Home from './Pages/Home'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Donation from './Pages/Donation'
import Hfc from './Pages/Hfc'
import JoinMember from './Pages/JoinMember'
import NotFound from './Pages/NotFound'
import { useEffect, useState } from 'react'
function App() {
const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for all images to load
    const loadImages = () => {
      const images = document.querySelectorAll('img');
      const totalImages = images.length;
      let loadedImages = 0;

      if (totalImages === 0) {
        // If no images, wait minimum time
        setTimeout(() => setLoading(false), 2500);
        return;
      }

      const imageLoaded = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          // All images loaded, wait for animation to complete
          setTimeout(() => setLoading(false), 500);
        }
      };

      images.forEach(img => {
        if (img.complete) {
          imageLoaded();
        } else {
          img.addEventListener('load', imageLoaded);
          img.addEventListener('error', imageLoaded); // Handle broken images
        }
      });

      // Maximum wait time (5 seconds) in case some images don't load
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    };

    // Start checking images after a small delay
    const timer = setTimeout(loadImages, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling when preloader is active
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [loading]);
  return (
    <>
      <ThemeProvider>
        {loading && <Preloader />}
            <TopNavbar></TopNavbar>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/about' element={<About></About>} />
          <Route path='/dashboard' element={<Dashboard></Dashboard>} />
          <Route path='/join-member' element={<JoinMember />} />
          <Route path='/donation' element={<Donation />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/home-fellowship-centers' element={<Hfc />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
