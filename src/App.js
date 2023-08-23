import React, {useState} from "react";
import "./style.css/App.css";
import PostList from "./components/PostList.jsx";
import "./components/ui/input/MyInput.css";
import ArticleForm from "./components/ArticleForm";


function App() {
  const [posts, setPosts] = useState([
    {id:1, tittle:"Заголовок1", body:"Description1", subject:"s1", author:"a1", date:"d1" },
    {id:2, tittle:"Заголовок2", body:"Description2", subject:"s2", author:"a2", date:"d2" },
  ]);
  const createArticle = (newArticle) => {
     setPosts([...posts, newArticle]);
  }
  return (
    <div className="App">
      <ArticleForm create={createArticle} />
      <PostList posts={posts} tittle="Список постов 1"/>
    </div>
  )
}

export default App;
