import React from 'react';
import { TodoContext } from '../TodoContext';

const TodoCounter = () => {
    const { totalTodos, completedTodo} = React.useContext(TodoContext);
    return (
        <h2 className='flex justify-center items-center text-lg text-white p-8'>You already complete: {completedTodo} from {totalTodos} TODOs</h2>
    )
}

export { TodoCounter };