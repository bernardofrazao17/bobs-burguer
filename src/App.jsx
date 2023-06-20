import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Bobsburguer } from "./pages/Bobsburguer"
import { Header } from "./components/Header"




function App() {
  
  return (
    <>
    <BrowserRouter>
     <Header/>
     <main>
     <Routes>
       <Route index path="/" element={<Home />}/>
       <Route path="/bobsburguer/:id" element={<Bobsburguer />} />
     </Routes>
    </main>
    </BrowserRouter>
    </>
  )
}

export default App