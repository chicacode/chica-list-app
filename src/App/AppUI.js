import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { Modal } from '../components/modal';
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
                    <div id="defaultModal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                        <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">

                            <div className="relative bg-white rounded-lg shadow bg-stone-50">
                                <div className="flex justify-between items-start p-5 rounded-t border-b">
                                    <h3 className="text-xl font-semibold dark:text-blue-700 lg:text-2xl">
                                        {searchedTodos[0]?.text}
                                    </h3>
                                </div>


                                <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                    <button data-modal-toggle="defaultModal" type="button" className="text-white bg-sky-700 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Cancel</button>
                                    <button data-modal-toggle="defaultModal" type="button" className="text-fuchsia-200 hover:bg-violet-300 rounded-lg text-sm font-medium px-5 py-2.5 hover:text-fuchsia-900 focus:z-10 bg-violet-500">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}


        </React.Fragment>
    );
}

export { AppUI };