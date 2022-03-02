import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoForm } from '../components/Todoform';
import { Modal } from '../components/Modal';
import '../index.css';


function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <h1 className='flex justify-center items-center text-xl text-neutral-100 pt-10'>Happy List</h1>
            <TodoCounter />
            <TodoSearch setOpenModal={setOpenModal}/>

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
            {openModal && (
                <Modal>
                    <div id="defaultModal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden flex justify-center top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                        <div className="relative px-1 w-full h-full md:h-auto">

                            <div className="relative bg-white rounded-lg shadow bg-stone-50 p-4">
                                <TodoForm />

                            </div>
                        </div>
                    </div>
                </Modal>
            )}


        </React.Fragment>
    );
}

export { AppUI };