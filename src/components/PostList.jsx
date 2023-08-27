import React from 'react';
import PostItem from "./PostItems.jsx";
import FilterAuthor from "./ui/filter/FilterAuthor";

function PostList ({posts, tittle, remove,}){

  
    
    return (
     <div>
        <FilterAuthor 
        defaultValue='Фильтр по автору'
        posts={posts}
        />
         <h1>{tittle}</h1>
         {posts.map((post, index)=>
           <PostItem remove={remove} number={index+1} post={post} key={post.id}/>)}
    </div>
    )
}

export default PostList;