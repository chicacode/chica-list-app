import './index.css';

function App() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold text-center">
          What's the plan for Today
        </h1>
      </div>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </div>

  );
}

export default App;
