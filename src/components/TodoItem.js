import React from 'react';
import './TodoItem.css';

const bgColor = [
    '#a3e635',
    '#BDE563',
    '#ff725e',
    '#facc15',
]
let randomColor = bgColor[Math.floor(Math.random() * bgColor.length)];

const TodoItem = (props) => {

    console.log(props);

    return (
        <li className="TodoItem">
            <span
                onClick={props.onComplete}
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}> √</span>
            <p className={`flex justify-center items-center h-12 text-white capitalize font-bold text-xl cursor-pointer`} style={{ backgroundColor: `${randomColor}` }}>{props.text}</p>
            <span
                onClick={props.onDelete}
                className="Icon Icon-delete">X</span>
        </li>
    )
}

export {TodoItem};