import React from 'react'
import MyButton from './UI/button/MyButton'

function TableItem(props) {

    return (
        <div className='d-flex justify-content-between align-items-center my-2 border p-3'>
            <div className='d-flex flex-column'>
                <span>
                    {props.post.id}.
                    <b> {props.post.title}</b>
                </span>
                <p style={{ display: "inline-block" }} className='lead'>{props.post.body}</p>
            </div>
            <span>
                <MyButton
                    className='btn btn-outline-danger w-50%'
                    onClick={() => props.remove(props.post)}>
                    Delete
                </MyButton>
            </span>
        </div >
    )
}

export default TableItem
