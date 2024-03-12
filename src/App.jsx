import { Outlet } from 'react-router-dom'
import './App.css'
//  import Home from './Pages/Home/Home'
import NavBAR from './components/Navbar/NavBAR'
// import MyCars from './Pages/Home/MyCars/MyCars'
// import Details from './Pages/Details/Details'

function App() {
  return (
    <>
     <NavBAR/>  
     <Outlet/>
    </>
  )
}

export default App
