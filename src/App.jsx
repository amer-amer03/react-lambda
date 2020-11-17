import { useState, useEffect } from "react";
import "./App.css";
import {
  getPriceOfLanguage,
  getFullPriceWithFormat,
  getWorkDuration,
  getDeadlineTime,
} from "./utils";

function App() {
  const [language, seLanguage] = useState("ua");
  const [inputText, setinputText] = useState("");
  const [deadline, setDeadline] = useState({
    hours: 0,
    minutes: 0,
    date: 0,
    month: 0,
    year: 0,
  });
  const [cost, setCost] = useState("");

  const format = ".docx";
  const letterCount = inputText.length;
  const expectedFormats = [".doc", ".docx", ".rtf"];

  const priceOfLanguage = getPriceOfLanguage(language, letterCount);
  const fullPriceWithFormat = getFullPriceWithFormat(
    priceOfLanguage,
    expectedFormats,
    format
  );

  const workMinutes = getWorkDuration(language, letterCount);
  const deadlineTime = getDeadlineTime(workMinutes);

  console.log(deadlineTime);
  const onLanguageChange = (e) => {
    seLanguage(e.target.value);
    getFullPriceWithFormat(priceOfLanguage, expectedFormats, format);
    getDeadlineTime(workMinutes);
  };

  const onTextChange = (e) => {
    setinputText(e.target.value);
    getFullPriceWithFormat(priceOfLanguage, expectedFormats, format);
    getDeadlineTime(workMinutes);
  };

  useEffect(() => {
    setCost(fullPriceWithFormat);
  }, [fullPriceWithFormat]);

  const hours = deadlineTime.getHours();
  const minutes = deadlineTime.getMinutes();
  const date = deadlineTime.getDate();
  const month = deadlineTime.getMonth() + 1;
  const year = deadlineTime.getFullYear();

  useEffect(() => {
    setDeadline((prevState) => {
      return {
        ...prevState,
        hours: hours,
        minutes: minutes,
        date: date,
        month: month,
        year: year,
      };
    });
  }, [hours, minutes, date, month, year]);

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(language);
  };

  return (
    <div className="App">
      <h2>Замовити Редагування</h2>
      <p>
        Виправимо всі помилки, приберемо всі дурниці, перефразуємо невдалі
        місця, але сильно текст не переписуватимемо. Зайвих виправлень не буде.
      </p>
      <form onSubmit={formSubmit}>
        <input type="email" placeholder="Enter your email" />
        <input type="text" placeholder="Enter your name" />
        <br />
        <textarea
          type="text"
          style={{ width: "300px", height: "300px" }}
          onChange={onTextChange}
          placeholder="Enter your text"
        />
        <br />
        <h3>Character number: {inputText.length} </h3>
        <h3>Мова</h3>
        <div>
          <label>
            <input
              type="radio"
              value="ua"
              checked={language === "ua"}
              onChange={onLanguageChange}
            />
            Українська
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="ru"
              checked={language === "ru"}
              onChange={onLanguageChange}
            />
            Російська
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="en"
              checked={language === "en"}
              onChange={onLanguageChange}
            />
            Англійська
          </label>
        </div>
      </form>

      <div>
        <h2>Ціна: {cost} грн </h2>
        <h2>
          Термін виконання: {deadline.hours} : {deadline.minutes}
          <br />
          {deadline.date} : {deadline.month} : {deadline.year}
        </h2>
      </div>
    </div>
  );
}

export default App;
