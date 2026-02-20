import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import ProjectListPage from "./pages/ProjectListPage"


function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/projects" element={ <ProjectListPage />} />
      </Routes>
      

      
    </>
  )
}

export default App
