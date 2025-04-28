
import Home from './Component/Home'
import Nav from './Component/Nav'
import Footer from './Component/Footer'
import Women from './Component/Women'
import Men from './Component/Men'
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
          </Routes>
      <Footer />
    </div>
  )
}

export default App
