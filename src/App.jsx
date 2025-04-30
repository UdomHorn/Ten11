
import Home from './Pages/Home'
import Nav from './Pages/Nav'

import Women from './Pages/Women'
import Men from './Pages/Men'
import Women1 from './Pages/Women1'
import TartanMaxiSkirt from './Pages/TartanMaxiSkirt'
import Footer from './Pages/Footer'
import {  Router, Routes, Route } from 'react-router-dom'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Nav />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women1" element={<Women1/>}/>
          <Route path="/TartanMaxiSkirt" element={<TartanMaxiSkirt/>}/>
          </Routes>
      <Footer />
    </div>
  )
}

export default App
