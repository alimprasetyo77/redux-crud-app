import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    const response = await axios.get('http://localhost:5000/posts')
    return response.data
})

export const addPost = createAsyncThunk('posts/addPosts', async ({title, content}) => {
    const response = await axios.post('http://localhost:5000/posts',{
        title,
        content
    })  
    return response.data
})

export const editPost = createAsyncThunk('posts/editPost', async ({id, title, content}) => {
    const response = await axios.patch(`http://localhost:5000/posts/${id}`, {
        title,
        content
    })
    return response.data
})

export const deletePost = createAsyncThunk('post/deletePost', async (id) => {
    await axios.delete(`http://localhost:5000/posts/${id}`)
    return id
})

const postEntity = createEntityAdapter({
    selectId : (posts) => posts.id // mengambil state berdasarkan id langsung dari store
})


const PostSlice = createSlice({
    name : "posts",
    initialState: postEntity.getInitialState() ,
    extraReducers : {
        [getPosts.fulfilled] : (state, action) => {
            postEntity.setAll(state, action.payload)
        },
        [addPost.fulfilled] : (state, action) => {
            postEntity.addOne(state, action.payload)
        },
        [deletePost.fulfilled] : (state, action) => {
            postEntity.removeOne(state, action.payload)
        },
        [editPost.fulfilled] : (state, action) => {
            postEntity.updateOne(state, {id : action.payload.id, updates : action.payload } )
        }
    }
})
export const postSelector = postEntity.getSelectors(state => state.posts) 
export default PostSlice.reducer