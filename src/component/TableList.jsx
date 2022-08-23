import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TableItem from './TableItem';

function TableList({ posts, title, remove }) {
    if (!posts.length) {
        return <h6 className='text-center'>Not Found</h6>
    }
    return (
        <>
            <h5 className='text-center'>{title}</h5>
            <TransitionGroup>
                {posts.map((post, index) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="item">
                        <TableItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </>
    )
}

export default TableList
