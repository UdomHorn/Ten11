
import Home from './Pages/Home'
import Nav from './Pages/Nav'

import Women from './Pages/Women'
import Men from './Pages/Men'
import RegularFitteddoubleTShirt from './Pages/RegularFitteddoubleTShirt'
import TartanMaxiSkirt from './Pages/TartanMaxiSkirt'
import KniitedFittedCardigan from './Pages/KniitedFittedCardigan'
import GatheringMidiDress from './Pages/GatheringMidiDress'
import WideLegDenimJean from './Pages/WideLegDenimJean'
import LooseFitDyatTShirt from './Pages/LooseFitDyatTShirt'
import LooseFitTShirtsWithPrinted from './Pages/LooseFitTShirtsWithPrinted'
import WideLegLooseFitJean from './Pages/WideLegLooseFitJean'
import StrapTop from './Pages/StrapTop'
import TubeTopFloralPrinted from './Pages/TubeTopFloralPrinted'
import LooseFitDenimShorts from './Pages/LooseFitDenimShorts'
import MiniZipSkirt from './Pages/MiniZipSkirt'
import MiniPleatsSkirt from './Pages/MiniPleatsSkirt'
import SheerMeshTop from './Pages/SheerMeshTop'
import RegularFittedLongSleevesTShirt from './Pages/RegularFittedLongSleevesTShirt'
import StraplessTopWithMesh from './Pages/StraplessTopWithMesh'
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
          <Route path="/RegularFitteddoubleTShirt" element={<RegularFitteddoubleTShirt/>}/>
          <Route path="/TartanMaxiSkirt" element={<TartanMaxiSkirt/>}/>
          <Route path="/KniitedFittedCardigan" element={<KniitedFittedCardigan/>}/>
          <Route path="/GatheringMidiDress" element={<GatheringMidiDress/>}/>
          <Route path='/WideLegDenimJean' element={<WideLegDenimJean/>}/>
          <Route path='/LooseFitDyatTShirt' element={<LooseFitDyatTShirt/>}/>
          <Route path='/LooseFitTShirtsWithPrinted' element={<LooseFitTShirtsWithPrinted/>}/>
          <Route path='/WideLegLooseFitJean' element={<WideLegLooseFitJean/>}/>
          <Route path='/StrapTop' element={<StrapTop/>}/>
          <Route path='/TubeTopFloralPrinted' element={<TubeTopFloralPrinted/>}/>
          <Route path='/LooseFitDenimShorts' element={<LooseFitDenimShorts/>}/>
          <Route path='/MiniZipSkirt' element={<MiniZipSkirt/>}/>
          <Route path='/MiniPleatsSkirt' element={<MiniPleatsSkirt/>}/>
          <Route path='/SheerMeshTop' element={<SheerMeshTop/>}/>
          <Route path='/RegularFittedLongSleevesTShirt' element={<RegularFittedLongSleevesTShirt/>}/>
          <Route path='/StraplessTopWithMesh' element={<StraplessTopWithMesh/>}/>
          </Routes>

      <Footer />
    </div>
  )
}

export default App
