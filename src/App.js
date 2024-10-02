import React, { useState, useEffect } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoFilters from './components/TodoFilters';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [filter, setFilter] = useState("all");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      document.getElementById("time").textContent = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      document.getElementById("date").textContent = now.toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos([...todos, { text, completed: false }]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleTodoCompletion = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const filterTodos = (newFilter) => {
    setFilter(newFilter);
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    setEditingText(todos[index].text);
  };

  const saveTodoEdit = (index) => {
    if (editingText.trim()) {
      const newTodos = todos.map((todo, i) =>
        i === index ? { ...todo, text: editingText.trim() } : todo
      );
      setTodos(newTodos);
      setEditingIndex(null);
      setEditingText("");
    }
  };

  const cancelTodoEdit = () => {
    setEditingIndex(null);
    setEditingText("");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  const deleteAllTodos = () => setTodos([]);

  return (
    <div className="container">
      <TodoHeader />
      <TodoInput addTodo={addTodo} />
      <TodoFilters filter={filter} filterTodos={filterTodos} />
      <TodoList
        todos={filteredTodos}
        toggleTodoCompletion={toggleTodoCompletion}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        editingIndex={editingIndex}
        editingText={editingText}
        setEditingText={setEditingText}
        saveTodoEdit={saveTodoEdit}
        cancelTodoEdit={cancelTodoEdit}
      />
      <TodoFooter todosCount={todos.length} deleteAllTodos={deleteAllTodos} />
    </div>
  );
}

export default App;
