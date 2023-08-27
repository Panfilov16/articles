import React from 'react';
import "../../../style/filterAuthor.css";

const FilterAuthor = ({defaultValue, posts, value, onChange}) => {

    return (
        <div className='f__author'>
        <div>Фильтр по автору:</div> 
        <select
        value={value}
        onChange={event => onChange(event.target.value)}
        >
           <option disabled value="">{defaultValue}</option>
        {posts.map(post => 
            <option 
            key = {post.value}
            value={post.author}
            >{post.author}</option>
         )}
      </select>
      </div>
    );
}

export default FilterAuthor;