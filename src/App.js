import React, {useState} from "react";
import "./style.css/App.css";
import PostList from "./components/PostList.jsx";

function App() {
  const [posts, setPosts] = React.useState([
    {id:1, tittle:"Заголовок1", body:"Description1", subject:"s1", author:"a1", date:"d1" },
    {id:2, tittle:"Заголовок2", body:"Description2", subject:"s2", author:"a2", date:"d2" },
  ]);
  return (
    <div className="App">
      <form>
        <input type="text" name="tittle" placeholder="Название статьи"/>
        <input type="text" name="body" placeholder="Описание статьи"/>
        <input type="text" name="subject" placeholder="Тема статьи"/>
        <input type="text" name="author" placeholder="Автор"/>
        <input type="text" name="date" placeholder="Дата публикации"/>
        <button className="btn__add">Создать статью</button>
      </form>
      <PostList posts={posts} tittle="Список постов 1"/>
    </div>
  )
}

export default App;
