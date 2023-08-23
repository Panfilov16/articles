import React, {useState} from 'react';
import MyInput from './ui/input/MyInput';
import MyButton from './ui/button/MyButton';

function ArticleForm({create}) {
    let MyDate= new Date();
    let curentDate = MyDate.getFullYear() + "-" + (MyDate.getMonth()+1) +"-" + MyDate.getDate();
    const [article, setArticle] = useState({tittle: "", body: "", subject: "", author: "", date: ""});

    function addNewArticle(e){
        e.preventDefault();
        const newArticle = {...article, id: Date.now()}
        create(newArticle);
        setArticle({tittle: "", body: "", subject: "", author: "", date: ""});
        }
    
  return (
    <div>
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

    </div>
  )
}


export default ArticleForm;