import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';


const TodoContext = React.createContext();


function TodoProvider(props) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

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
        <TodoContext.Provider value={{
                loading,
                error,
                totalTodos,
                completedTodo,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
                openModal,
                setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };