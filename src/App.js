import './App.css';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]);

  const [text, setText] = useState("");


  const onClickAddTodo = () => {
    setTodos([...todos, { done: false, text: text }]);
    setText("");
  }


  const onDone = (text) => {
    setTodos(todos.map(i => i.text === text ? { done: !i.done, text } : i))

  }

  const onDelete = (text) => {
    setTodos(todos.filter(i => i.text !== text))
  }

  return (
    <div>
      <ul>
        {todos.map(i => <li key={i.text}>
          
          <p style={{ textDecoration: i.done ? "line-through" : "", cursor: "pointer" }} onClick={() => onDone(i.text)}>{i.text}</p>
          <button onClick={() => onDelete(i.text)}>delete</button>
        </li>)}
      </ul>

      <input value={text} onChange={e => setText(e.target.value)}></input>
      <button onClick={onClickAddTodo}> add </button>
    </div>
  );
}

export default App;
