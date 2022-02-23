import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import '../index.css';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p className='flex justify-center items-center text-xl bg-white text-red p-12'>Error in the loading data...</p>}
                {loading && <p className='flex justify-center items-center text-xl text-white p-12'>Loading...</p>}
                {(!loading && !searchedTodos.length) && <p className='flex justify-center items-center text-xl text-white p-12'>Create your first TODO</p>}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

        </React.Fragment>
    );
}

export { AppUI };