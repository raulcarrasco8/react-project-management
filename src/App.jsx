import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import ProjectListPage from "./pages/ProjectListPage"
import CreateProjectPage from "./pages/CreateProjectPage"


function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/projects" element={ <ProjectListPage />} />
        <Route path="/projects/create" element={<CreateProjectPage />} />
      </Routes>
    </>
  )
}

export default App;
