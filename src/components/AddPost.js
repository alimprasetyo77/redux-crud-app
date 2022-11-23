/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addPost } from "../features/PostSlice"

const AddPost = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const createPost = async (e) => {
    e.preventDefault()
    await dispatch(addPost({ title, content }))
    navigate("/")
  }

  return (
    <div className="container h-screen min-w-full flex items-center justify-center bg-slate-100 ">
      <form
        onSubmit={createPost}
        className="w-full max-w-lg bg-white p-3 rounded-lg"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="flex flex-wrap w-full mb-4 p-4 ">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">
                Add post
              </h1>
              <div className="h-1 w-3/12 mt-3 bg-teal-500 rounded"></div>
            </div>
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="nick"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <p className="text-gray-600 text-xs italic">Remove if not needed</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Content
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              value={content}
              onChange={(e) => {
                setContent(e.target.value)
              }}
            ></textarea>
            <p className="text-gray-600 text-xs italic">
              Re-size can be disabled by set by resize-none / resize-y /
              resize-x / resize
            </p>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3 min-w-full flex justify-end">
            <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 mr-4 rounded">
              Publish
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddPost
