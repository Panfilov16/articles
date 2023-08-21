import React from 'react';
import Comments  from './Comments';

function PostItem(props){
  return(
  <div className="post">
    <div className="post__content">
      <h2>{props.post.id}. {props.post.tittle}</h2>
      <p>{props.post.body}</p>
      <div>Тема:{props.post.subject}</div>
      <div>Автор: {props.post.author}</div>
      <date>Дата публикации:{props.post.date}</date>
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