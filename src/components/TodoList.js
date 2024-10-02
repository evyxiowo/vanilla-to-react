function TodoList({
  todos,
  toggleTodoCompletion,
  deleteTodo,
  editTodo,
  editingIndex,
  editingText,
  setEditingText,
  saveTodoEdit,
  cancelTodoEdit
}) {
  return (
    <div className="todos-container">
      <ul className="todos">
        {todos.map((todo, index) => (
          <li className="todo" key={index}>
            {editingIndex === index ? (
              <div className="todo-edit-container">
                <div className="todo-edit-buttons">
                  <button className="save-button" onClick={() => saveTodoEdit(index)}>
                    <i className="fa-solid fa-bookmark"></i>
                  </button>
                  <button className="cancel-button" onClick={cancelTodoEdit}>
                    <i className="fa-solid fa-ban"></i>
                  </button>
                </div>
                <input
                  type="text"
                  value={editingText}
                  className="edit-input"
                  onChange={(e) => setEditingText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveTodoEdit(index)}
                />
              </div>
            ) : (
              <>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodoCompletion(index)}
                    style={{ display: 'none' }}
                  />
                  <i className={`custom-checkbox fa-regular ${todo.completed ? "fa-square-check" : "fa-square"}`}></i>
                  <span className="todo-text">{todo.text}</span>
                </label>
                <button className="edit-button" onClick={() => editTodo(index)}>
                  <i className="fa-solid fa-pen"></i>
                </button>
                <button className="delete-button" onClick={() => deleteTodo(index)}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
