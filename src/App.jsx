
import Home from './Component/Home'
import Nav from './Component/Nav'
import Footer from './Component/Footer'
import Women from './Component/Women'
import Men from './Component/Men'
import Women1 from './Component/Women1'
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
          </Routes>
      <Footer />
    </div>
  )
}

export default App
