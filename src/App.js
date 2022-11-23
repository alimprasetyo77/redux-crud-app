/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom"
import AddPost from "./components/AddPost"
import EditPost from "./components/EditPost"
import ShowPosts from "./components/ShowPosts"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShowPosts />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
      </Routes>
    </div>
  )
}

export default App
