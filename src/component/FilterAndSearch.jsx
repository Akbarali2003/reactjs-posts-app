import React from 'react'
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

function FilterAndSearch({ filter, setFilter }) {
    return (
        <div className="d-flex justify-content-between my-2">
            <MyInput
                type="text"
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                className='form-control w-50 mx-3'
                placeholder='Search...'
            />
            <MySelect
                value={filter.sort}
                onChange={selected => setFilter({ ...filter, sort: selected })}
                defaultValue={'Sorted by'}
                options={[
                    { value: "title", name: 'Programming' },
                    { value: "body", name: 'Jobs' }
                ]}
            />
        </div>
    )
}

export default FilterAndSearch
