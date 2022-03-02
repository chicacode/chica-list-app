import React, { useState } from 'react'
import { TodoContext } from '../../TodoContext'

function TodoForm() {
    const [value, setValue] = useState('');

    const onChange = (e) =>{
        setValue(e.target.value)
    }
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);
    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setOpenModal(false);
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="flex justify-center">
                <div className="mb-3 lg:w-96">
                    <label htmlFor="content" className="flex justify-center items-center mb-2 text-xl font-semibold dark:text-blue-700 lg:text-2xl capitalize">add your todo happy lits</label>
                    <textarea
                        value={value}
                        onChange={onChange}
                        className="block w-full px-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="content"
                        rows="3"
                        placeholder="Your message"
                    ></textarea>
                </div>
            </div>
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button
                    onClick={onCancel}
                    data-modal-toggle="defaultModal"
                    type="button"
                    className="text-white bg-sky-700 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Cancel</button>
                <button
                    
                    data-modal-toggle="defaultModal"
                    type="submit"
                    className="bg-sky-100 hover:bg-sky-200 text-neutral-600 hover:text-neutral-800 rounded-lg text-sm font-medium px-5 py-2.5  focus:z-10 ">Add</button>
            </div>
        </form>
    )
}

export { TodoForm }