import React, {useState} from "react";
import "./style/App.css";
import PostList from "./components/PostList.jsx";
import "./components/ui/input/MyInput.css";
import ArticleForm from "./components/ArticleForm";


function App() {
  const [posts, setPosts] = useState([
    {id:1, tittle:"Заголовок1", body:"Description1", subject:"s1", author:"a1", date:"d1" },
    {id:2, tittle:"Заголовок2", body:"Description2", subject:"s2", author:"a2", date:"d2" },
  ]);
  
  const [search, setSearch] = useState("");
  const createArticle = (newArticle) => {
     setPosts([...posts, newArticle]);
  }

  const removeArticle = (post) => {
    setPosts(posts.filter(p => p.id!== post.id));
  }
  return (
    <div className="App">
      <ArticleForm create={createArticle} />
      <MyInput
      value={search}
      onChange={(e) => setSearch(e.target.value)} 
      placeholder="Поиск..." />
      {posts.length !==0 ?       
      <PostList remove={removeArticle} posts={posts} tittle="Список постов 1"/>
      :
      <h2>Постов не найдено!</h2>
}
    </div>
  )
}

export default App;
