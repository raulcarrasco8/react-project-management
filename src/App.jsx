import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import PostListPage from "./pages/PostListPage"


function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/projects" element={ <PostListPage />} />
      </Routes>
    </>
  )
}

export default App
