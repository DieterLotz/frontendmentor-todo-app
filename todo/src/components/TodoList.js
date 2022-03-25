import React, { useState} from 'react';
import classes from './TodoList.module.scss';

const TodoList = (props) => {
    return (
        <div className={classes['todo-list-container']}>
            {props.todos.length > 0 && props.todos.map(item => {
                return (
                    <div className={classes.todo} key={item.key}>
                        <input type="checkbox" checked={item.isCompleted ? true : false} onChange={() => {props.onChange(item.key)}}></input>
                        <label>{item.text}</label>
                        <button onClick={() => { props.onRemove(item.key)}}></button>
                    </div>)
            })}
            {props.todos.length <= 0 &&
               <label> No todos.</label>
            }
        </div>
    );
}
 
export default TodoList;