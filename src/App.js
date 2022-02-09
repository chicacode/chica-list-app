import React, { Fragment, useState } from 'react';
import './index.css';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import CreateTodoButton from './components/CreateTodoButton';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

const defaultTodos = [
  { text: 'Work', completed: false },
  { text: 'Go to the gym', completed: false },
  { text: 'Go to correos', completed: true },
  { text: 'Practice Udemy', completed: false },
  { text: 'study Platzi', completed: false },
]

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(defaultTodos);

  const completedTodo = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;

  return (
    <Fragment>
      <div className="max-w-md mx-auto md:max-w-2xl w-full sm:w-1/2 md:w-3/4 my-4">
        <h1 className="text-3xl font-bold text-center text-white">
          What's the plan for Today
        </h1>
        <TodoCounter 
         total={totalTodos}
         completed={completedTodo}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList>
          {todos.map(todo => (
            <TodoItem text={todo.text} key={todo.text} />
          ))}
        </TodoList>
      </div>
    </Fragment>

  );
}

export default App;
