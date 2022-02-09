import React from 'react';
import './TodoItem.css';

const bgColor = [
    '#a3e635',
    '#ff725e',
    '#facc15',
]
let randomColor = bgColor[Math.floor(Math.random() * bgColor.length)];

const TodoItem = (props) => {

    const onComplete = () => {

    }
    const onDelete = () => {

    }
    return (
        <li className="TodoItem">
            <span
                onClick={onComplete}
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}> √</span>
            <p className={`flex justify-center items-center h-12 text-white capitalize font-bold text-xl cursor-pointer`} style={{ backgroundColor: `${randomColor}` }}>{props.text}</p>
            <span
                onClick={onDelete}
                className="Icon Icon-delete">X</span>
        </li>
    )
}

export default TodoItem;