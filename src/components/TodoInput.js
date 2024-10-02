import { useState } from 'react';

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    addTodo(text);
    setText("");
  };

  return (
    <div className="input-container">
      <input
        className="todo-input"
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
      />
      <button className="add-button" onClick={handleAddTodo}>
        <i className="fa fa-plus-circle"></i>
      </button>
    </div>
  );
}

export default TodoInput;
