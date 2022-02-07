import React from 'react';


const Todolist = (props) => {
    return (
        <section>
            <ul>
               {props.children}
            </ul>
        </section>
    );
}

export default Todolist;