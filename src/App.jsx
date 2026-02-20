import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import PostListPage from "./pages/PostListPage"
import CreatePostPage from "./pages/CreatePostPage"


function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/posts" element={ <PostListPage />} />
        <Route path="/posts/create" element={<CreatePostPage />} />
      </Routes>
    </>
  )
}

export default App;
