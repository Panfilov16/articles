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
  
  //const date= Date.now().getFullYear()+"-"+Date.now().getMonth()+"-"+Date.now().getDate();

  const [tittle, setTittle] = useState("safawf");
  const [body, setBody] = useState("");
  const [subject, setSubject] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  function addNewArticle(e){
    e.preventDefault();
    const newArticle = {
      id: Date.now(),
      tittle,
      body,
      subject,
      author,
      date,
    }
    console.log(newArticle);
    }
  

  return (
    <div className="App">
      <form className="form">
        <MyInput 
        value={tittle} 
        onChange={e => setTittle(e.target.value)} 
        type="text" 
        name="tittle" 
        placeholder="Название статьи"/>
        <MyInput 
        value={body}
        onChange={e => setBody(e.target.value)}
        type="text" 
        name="body" 
        placeholder="Описание статьи"/>
        <MyInput 
        value={subject}
        onChange={e => setSubject(e.target.value)}
        type="text" 
        name="subject" 
        placeholder="Тема статьи"/>
        <MyInput
        value={author}
        onChange={e => setAuthor(e.target.value)} 
        type="text" 
        name="author" 
        placeholder="Автор"/>
        <MyInput
        value={date}
        onChange={e => setDate(e.target.value)} 
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
