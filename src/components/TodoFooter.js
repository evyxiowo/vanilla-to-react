function TodoFooter({ todosCount, deleteAllTodos }) {
    return (
      <>
        <hr className="counter" />
        <div className="counter-container">
          <p>
            <span>{todosCount}</span> items total
          </p>
          <button className="filter" id="delete-all" onClick={deleteAllTodos}>
            Delete All
          </button>
        </div>
        <footer>
          <div className="footer">
            <p>
              Created by
              <a href="https://github.com/evyxiowo" target="_blank" rel="noopener noreferrer">
                Xievy
              </a>
            </p>
            <p>
              Powered by
              <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                JavaScript
              </a>
            </p>
            <p>
              CSS & HTML & Font Awesome by
              <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">
                W3Schools
              </a>
            </p>
          </div>
        </footer>
      </>
    );
  }
  
  export default TodoFooter;
  