import React, {useState} from "react";
import "./style.css/App.css";
import PostList from "./components/PostList.jsx";
import MyInput from "./components/ui/input/MyInput";
import "./components/ui/input/MyInput.css";
import MyButton from "./components/ui/button/MyButton";


function App() {
  const [posts, setPosts] = React.useState([
    {id:1, tittle:"Заголовок1", body:"Description1", subject:"s1", author:"a1", date:"d1" },
    {id:2, tittle:"Заголовок2", body:"Description2", subject:"s2", author:"a2", date:"d2" },
  ]);
  
 let MyDate= new Date();
 let curentDate = MyDate.getFullYear() + "-" + (MyDate.getMonth()+1) +"-" + MyDate.getDate();

  const [article, setArticle] = useState({tittle: "", body: "", subject: "", author: "", date: ""});

  function addNewArticle(e){
    e.preventDefault();

    setPosts([...posts, {...article, id: Date.now()}]);
    setArticle({tittle: "", body: "", subject: "", author: "", date: ""});
    }
  

  return (
    <div className="App">
      <form className="form">
        <MyInput 
        value={article.tittle} 
        onChange={e => setArticle({...article, tittle: e.target.value})}  
        type="text" 
        name="tittle" 
        placeholder="Название статьи"/>
        <MyInput 
        value={article.body}
        onChange={e => setArticle({...article, body: e.target.value})}
        type="text" 
        name="body" 
        placeholder="Текст статьи"/>
        <MyInput 
        value={article.subject}
        onChange={e => setArticle({...article, subject: e.target.value})}
        type="text" 
        name="subject" 
        placeholder="Тема статьи"/>
        <MyInput
        value={article.author}
        onChange={e => setArticle({...article, author: e.target.value})} 
        type="text" 
        name="author" 
        placeholder="Автор"/>
        <MyInput
        value={article.date}
        onChange={e => setArticle({...article, date: (e.target.value)=curentDate })} 
        type="text" 
        name="date" 
        placeholder="Дата публикации"/>
        <MyButton className="btn__add" onClick={addNewArticle}>Создать статью</MyButton>
      </form>
      <PostList posts={posts} tittle="Список постов 1"/>
    </div>
  )
}

export default App;
