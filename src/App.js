import React from "react";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <h2>Заголовок</h2>
          <p>Текст</p>
          <div>Тема: </div>
          <div>Автор: </div>
          <date>Дата:</date>
        </div>
        <div className="post__btn">
          <button type="button">Редактировать</button>
        </div>
      </div>
    </div>
  )
}

export default App;
