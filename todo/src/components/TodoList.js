import React, { useState } from 'react';
import styles from './TodoList.module.scss';
import './../styles/_checkbox.scss';
import TodoFilter from './TodoFilter';

const TodoList = (props) => {
    const [filterCondition, setFilterCondition] = useState('all');

    const filteredTodos = 
        filterCondition === 'all' ? 
        props.todoList 
        : filterCondition === 'active' ? 
        props.todoList.filter(e => e.isCompleted === false) 
        : props.todoList.filter(e => e.isCompleted === true);

    const filterChangedHandler = (condition) => {
        setFilterCondition(condition);
    };

    return (
        <div className={styles['todo-list-container']}>
            {filteredTodos.length > 0 && filteredTodos.map(item => {
                return (
                    <div className={styles.todo} key={item.key}>
                        <input type="checkbox" checked={item.isCompleted ? true : false} onChange={() => {props.onChange(item.key)}}></input>
                        <label>{item.text}</label>
                        <button onClick={() => { props.onRemove(item.key)}}></button>
                    </div>)
            })}
            <div className={styles['filter-section']}>
                <label>{filteredTodos.filter((item) => item.isCompleted === false).length} items left</label>
                <TodoFilter onFilter={filterChangedHandler}/>
                <button type='submit' onClick={props.onClearCompleted}>Clear Completed</button>
            </div>
        </div>
    );
}
 
export default TodoList;