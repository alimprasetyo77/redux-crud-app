/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deletePost, getPosts, postSelector } from "../features/PostSlice"
import { IoMdAddCircleOutline } from "react-icons/io"

const ShowPosts = () => {
  const posts = useSelector(postSelector.selectAll)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  return (
    <div>
      <section className="text-gray-600 body-font bg-slate-100">
        <div className="container px-5 py-8 mx-auto max-w-7x1">
          <div className="flex flex-wrap w-full mb-4 p-4 ">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-medium  title-font mb-2 text-gray-900">
                Posts
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="w-full flex justify-end pr-8">
            <Link to={"/add-post"}>
              <button className="flex gap-2 delay-100 uppercase shadow bg-emerald-600 hover:bg-emerald-700 focus:shadow-outline focus:outline-none text-white text-sm py-2 px-6 rounded">
                <IoMdAddCircleOutline className="h-5 w-5" /> add post
              </button>
            </Link>
          </div>
          <div className="flex flex-wrap mt-4">
            {posts.map((post, index) => (
              <div key={post.id} className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-white p-6 rounded-lg">
                  <img
                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                    src="data:image/png;base64,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"
                    alt="Image Size 720x400"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Post : {index + 1}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {post.title}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {post.content.length > 100
                      ? `${post.content.substring(0, 100)} ...`
                      : post.content}
                  </p>
                  <div className="flex justify-end mt-3 gap-3">
                    <Link to={`/edit-post/${post.id}`}>
                      <button className="uppercase shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-2 px-6 rounded">
                        Update
                      </button>
                    </Link>
                    <button
                      className="uppercase shadow bg-rose-600 hover:bg-rose-700 focus:shadow-outline focus:outline-none text-white text-xs py-2 px-6 rounded"
                      onClick={() => dispatch(deletePost(post.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShowPosts
