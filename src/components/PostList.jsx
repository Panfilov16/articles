import React from 'react';
import PostItem from "./PostItems.jsx";

function PostList ({posts, tittle}){
    return (
     <div>
       <h1>{tittle}</h1>
         {posts.map(post=>
           <PostItem post={post} key={post.id}/>)}
    </div>
    )
}

export default PostList;