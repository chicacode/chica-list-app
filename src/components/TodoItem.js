import React from 'react';

const bgColor = [
    '#1ec891',
    '#ff725e',
    '#ffd05b',
  ]
  let randomColor = bgColor[Math.floor(Math.random() * bgColor.length)];
  console.log('que es random color', randomColor)
const TodoItem = (props) => {
    return (
        <li>
            <span>C</span>
            <p className={`flex items-center h-12 text-white capitalize font-bold text-xl cursor-pointer`}  style={{ backgroundColor: `${randomColor}` }}>{props.text}</p>
            <span>X</span>
        </li>
    )
}

export default TodoItem;