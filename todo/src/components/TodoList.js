import React, { useState} from 'react';
import styles from './TodoList.module.scss';
import './../styles/_checkbox.scss';

const TodoList = (props) => {
    return (
        <div className={styles['todo-list-container']}>
            {props.todos.length > 0 && props.todos.map(item => {
                return (
                    <div className={styles.todo} key={item.key}>
                        <input type="checkbox" checked={item.isCompleted ? true : false} onChange={() => {props.onChange(item.key)}}></input>
                        <label>{item.text}</label>
                        <button onClick={() => { props.onRemove(item.key)}}></button>
                    </div>)
            })}
            <div>
                <label>{props.todos.filter((item) => item.isCompleted === false).length} items left</label>
                <button type='button'>Clear Completed</button>
            </div>
        </div>
    );
}
 
export default TodoList;