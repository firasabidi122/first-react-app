import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleAddTodo = () => {
    const text = inputRef.current.value.trim();
    if (text !== '') {
      setTodos([...todos, text]);
      inputRef.current.value = '';
    }
  };

  const handleRemoveTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="App">
      <h2>to do list</h2>
      

      <ul>
      {todos.map((item, index) => (
  <li key={index}>✍️ {item} <button onClick={() => handleRemoveTodo(index)}>⛔</button></li>
  
  
))}

      </ul>

      <input ref={inputRef} placeholder="enter task..." />
      <button onClick={handleAddTodo}>Add</button>
      
      
    </div>
  );
}

export default App;
