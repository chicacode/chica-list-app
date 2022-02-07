import React, { Fragment } from 'react';
import './index.css';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import CreateTodoButton from './components/CreateTodoButton';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

const todos = [
  { text: 'Work', completed: false },
  { text: 'Go to the gym', completed: false },
  { text: 'Go to correos', completed: false },
  { text: 'Practice Udemy', completed: false },
  { text: 'study Platzi', completed: false },
]

function App() {
  return (
    <Fragment>
      <div className="max-w-md mx-auto md:max-w-2xl w-full sm:w-1/2 md:w-3/4 my-4">
        <h1 className="text-3xl font-bold text-center text-white">
          What's the plan for Today
        </h1>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          {todos.map(todo => (
            <TodoItem text={todo.text} key={todo.text}/>
          ))}
        </TodoList>
      </div>
    </Fragment>

  );
}

export default App;
