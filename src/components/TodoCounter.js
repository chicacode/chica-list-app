import React from 'react';


const TodoCounter = ({ total, completed }) => {
    return (
        <h2 className='flex justify-center items-center text-xl text-white p-12'>You already complete: {completed} from {total} TODOS</h2>
    )
}

export { TodoCounter };