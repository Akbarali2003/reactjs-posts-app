import React from 'react'
import { getPageArray } from '../../../utils/page'
import MyButton from './../button/MyButton';

function MyPagination({ totalPage, page, changPage }) {
    const pageArray = getPageArray(totalPage)
    return (
        <>
            {pageArray.map(item => (
                <MyButton
                    key={item}
                    onClick={() => changPage(item)}
                    className={page == item ? 'btn btn-primary' : 'btn btn-outline-primary'}>
                    {item}
                </MyButton>
            ))
            }
        </>
    )
}

export default MyPagination
