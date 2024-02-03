import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import FetchItems from "../components/FetchItems";
function App() {

  return (
    <>
      <Navbar/>
      <FetchItems />
      <Outlet/>  
    </>
  )
}

export default App;
