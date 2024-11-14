import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Login from './pages/Login'

// import archive page

function App() {
  return (
    <>
      <Router>
        <div className='mx-auto'>
          <Routes>

            <Route path='/' element={<Start />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            
            {/* add archive path */}

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
