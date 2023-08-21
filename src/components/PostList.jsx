import React from 'react';
import PostItem from "./PostItems.jsx";

function PostList ({posts, tittle}){
    return (
     <div>
       <h1>{tittle}</h1>
         {posts.map(post=>
           <PostItem post={post} key={post.id}/>)}
         <button className="btn__add">Добавить статью</button>

    </div>
    )
}

export default PostList;