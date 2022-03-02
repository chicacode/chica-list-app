import React from 'react';

const CreateTodoButton = (props) => {

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <button
            onClick={onClickButton}
            type="button"
            className={`bg-gray-50 hover:bg-sky-100 text-neutral-600 hover:text-neutral-800 font-bold py-2 px-4 rounded-r-md cursor-pointer z-10`}>
            Add Todo
        </button>
    )
}

export  default CreateTodoButton ;