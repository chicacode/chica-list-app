import React from 'react'

function TodoForm() {
    const onCancel = () => {
        //TODO
    }

    const onSubmit = () => {
        //TODO
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="flex justify-center">
                <div className="mb-3 lg:w-96">
                    <label for="content" className="flex justify-center items-center mb-2 text-xl font-semibold dark:text-blue-700 lg:text-2xl capitalize">add tour TODO</label>
                    <textarea
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
                     onClick={onCancel}
                    data-modal-toggle="defaultModal"
                    type="submit"
                    className="text-fuchsia-200 hover:bg-violet-300 rounded-lg text-sm font-medium px-5 py-2.5 hover:text-fuchsia-900 focus:z-10 bg-violet-500">Add</button>
            </div>
        </form>
    )
}

export { TodoForm }