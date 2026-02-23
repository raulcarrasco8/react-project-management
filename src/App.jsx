import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import ProjectListPage from "./pages/ProjectListPage"
import CreateProjectPage from "./pages/CreateProjectPage"
import ProjectDetailsPage from "./pages/ProjectDetailsPage"


function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/projects" element={ <ProjectListPage />} />
        <Route path="/projects/create" element={<CreateProjectPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
      </Routes>
    </>
  )
}

export default App;
