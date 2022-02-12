import React, { Fragment, useState } from 'react';
import './index.css';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

// const defaultTodos = [
//   { text: 'Work', completed: false },
//   { text: 'Go to the gym', completed: false },
//   { text: 'Go to correos', completed: true },
//   { text: 'Practice Udemy', completed: false },
//   { text: 'study Platzi', completed: false },
// ]

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem(itemName, stringifiedTodos);
    setItem(newTodos);
  };

  return [
    item,
    saveItem
  ];

}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');

  const completedTodo = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;

  // Filter
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }



  const completeTodo = (text) => {
    // examinar todo por todo cual tiene exactamente ese mismo texto para obtener la posicion del array
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodosList = [...todos];

    newTodosList[todoIndex] = {
      text: newTodosList[todoIndex].text,
      completed: true
    };

    saveTodos(newTodosList);
  }

  const deleteTodo = (text) => {
    // examinar todo por todo cual tiene exactamente ese mismo texto para obtener la posicion del array
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodosList = [...todos];

    newTodosList.splice(todoIndex, 1)

    saveTodos(newTodosList);
  }
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
          {searchedTodos.map(todo => (
            <TodoItem
              text={todo.text}
              key={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      </div>
    </Fragment>

  );
}

export default App;
