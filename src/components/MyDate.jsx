import React, { Component } from 'react';

class MyDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: ''
    };
  }

  componentDidMount() {
    // Получаем текущую дату
    const currentDate = new Date();
    
    // Преобразуем дату в строку в формате ГГГГ-ММ-ДД
    const formattedDate = currentDate.toISOString().split('T')[0];
    
    // Обновляем состояние компонента с текущей датой
    this.setState({ currentDate: formattedDate });
  }

  render() {
    return (
      <form>
        <label htmlFor="date">Дата:</label>
        <input type="date" id="date" name="date" value={this.state.currentDate} />
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

export default MyDate;