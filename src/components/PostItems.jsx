import React from 'react';
import Comments  from './Comments';

function PostItem(props){
  return(
  <div className="post">
    <div className="post__content">
      <h2>{props.post.id}. {props.post.title}</h2>
      <p>{props.post.body}</p>
      <div>{props.post.subject}</div>
      <div>{props.post.author}</div>
      <date>{props.post.date}</date>
      <Comments></Comments>
    </div>
    <div className="post__btn">
      <button className='btn__edit' type="button">Редактировать</button>
      <button className='btn__delete' type="button">Удалить</button>
    </div>
  </div>
  )
}
export default PostItem;