import React, { useEffect, useState } from 'react';
import '../style/style.css';
import TableList from '../component/TableList';
import PostForm from '../component/PostForm';
import FilterAndSearch from '../component/FilterAndSearch';
import MyModal from '../component/UI/modal/MyModal';
import MyButton from '../component/UI/button/MyButton';
import { usePosts } from '../hooks/useCreatePost';
import PostServiceApi from '../API/PostServiceApi';
import MyLoader from '../component/UI/loader/MyLoader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/page';
import MyPagination from '../component/UI/pagination/MyPagination';

function MainPage() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false)
    const [totalPage, setTotalPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostServiceApi.getAllPosts(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPage(getPageCount(totalCount, limit))
    })
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    useEffect(() => {
        fetchPosts(limit, page)
    }, [])

    const removePost = (post) => {
        setPosts(posts.filter(s => s.id !== post.id))
    }

    const changPage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

    return (
        <div className='app mx-auto w-75 p-3'>
            <MyButton
                onClick={() => setModal(true)}
                className='btn btn-primary'>
                Add Post
            </MyButton>
            <MyButton
                className='btn btn-primary ms-2'>
                {posts.length}
            </MyButton>
            <MyModal modal={modal} setModal={setModal}>
                <PostForm createPost={createPost} />
            </MyModal>
            <FilterAndSearch filter={filter} setFilter={setFilter} />
            {postError && <p>Error</p>}
            {isLoading ?
                <div className='d-flex justify-content-center mt-4'><MyLoader /></div> :
                <TableList remove={removePost} posts={sortedAndSearchPosts} title={'Beautiful posts'} />
            }
            <MyPagination page={page} changPage={changPage} totalPage={totalPage} />
        </div>
    );
}

export default MainPage;
