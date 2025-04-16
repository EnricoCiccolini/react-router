import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./layaut/NavBar"
import Homepages from "./pages/Homepages"
import PostList from "./pages/PostList"
import ChiSiamo from "./pages/ChiSiamo"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Homepages />} />
            <Route path='/post-list' element={<PostList />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
          </Route>

        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
