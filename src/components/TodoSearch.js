import React from 'react';
import CreateTodoButton from './CreateTodoButton';
import { TodoContext } from '../TodoContext';

const TodoSearch = ({setOpenModal}) => {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onChangeValueSearch = (event) =>{
        setSearchValue(event.target.value)
    }
    return (
        <div className='flex'>
            <input 
            onChange={onChangeValueSearch}
            className={`
            placeholder:italic placeholder:text-slate-400 block bg-white w-full 
            border border-slate-300 rounded-l-md py-1 pl-9 pr-3 
            shadow-sm focus:outline-none focus:border-purple-500 focus:ring-purple-500 
            focus:ring-0 sm:text-sm" placeholder="Search for anything..." type="text" name="search" `} 
            value={searchValue}
            />

            <CreateTodoButton setOpenModal={setOpenModal}/>
        </div>

    )
}

export {TodoSearch};