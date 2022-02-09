import React from 'react';

const CreateTodoButton = () =>{

    const onClickButton = () => {

    }
    return(
        <button 
        onClick={onClickButton}
        type="button" 
        className={`bg-purple-500 hover:bg-purple-300 text-white hover:text-purple-800 font-bold py-2 px-4 rounded-r-md cursor-pointer`}>
            Add Todo</button>
    )
}

export default CreateTodoButton;