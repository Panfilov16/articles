import React, {useState} from "react";
import PostItem from "./components/PostItems.jsx";
import "./style.css/App.css";

function App() {
  const [posts, setPosts] = React.useState([
    {id:1, tittle:"Заголовок", body:"Description", subject:"", author:"", date:"" },
    {id:2, tittle:"Заголовок", body:"Description", subject:"", author:"", date:"" },
  ]);
  return (
    <div className="App">
      {posts.map(post=>
        post.id)}
      <button className="btn__add">Добавить статью</button>
    </div>
  )
}

export default App;
