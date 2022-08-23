import React, { useState } from 'react'
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

function PostForm({ createPost }) {
    const [post, setPost] = useState({ title: '', body: '' })

    const addPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        createPost(newPost)
        setPost({ title: '', body: '' })
    }
    return (
        <form>
            <h4 className='text-center'>Create your frist post</h4>
            <MyInput
                type="text"
                className='form-control'
                placeholder='Programming Language'
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            />
            <MyInput
                type="text"
                className='form-control my-3'
                placeholder='Enter your favourite stack'
                value={post.body}
                onChange={e => setPost({ ...post, stack: e.target.value })}
            />
            <MyButton className='btn btn-primary w-100' onClick={addPost}>
                Add Post
            </MyButton>
        </form>
    )
}

export default PostForm
