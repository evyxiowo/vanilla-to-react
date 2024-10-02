function TodoFilters({ filter, filterTodos }) {
    return (
      <div className="filters">
        <button className={`filter ${filter === "all" ? "active" : ""}`} onClick={() => filterTodos("all")}>
          All
        </button>
        <button className={`filter ${filter === "completed" ? "active" : ""}`} onClick={() => filterTodos("completed")}>
          Complete
        </button>
        <button className={`filter ${filter === "pending" ? "active" : ""}`} onClick={() => filterTodos("pending")}>
          Incomplete
        </button>
      </div>
    );
  }
  
  export default TodoFilters;
  