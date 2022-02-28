import React from 'react';

const CreateTodoButton = (props) => {

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <button
            onClick={onClickButton}
            type="button"
            className={`bg-purple-500 hover:bg-purple-300 text-white hover:text-purple-800 font-bold py-2 px-4 rounded-r-md cursor-pointer z-10`}>
            Add Todo
        </button>
    )
}

export  default CreateTodoButton ;