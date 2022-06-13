import React, { useState, useContext } from 'react';
import styles from './TodoList.module.scss';
import './../styles/_checkbox.scss';
import TodoFilter from './TodoFilter';
import { ThemeContext } from './../store/ThemeContext';

const TodoList = (props) => {
    const [filterCondition, setFilterCondition] = useState('all');
    const { theme } = useContext(ThemeContext);

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
        <div className={styles['todo-list-container']} data-theme={theme}>
            {filteredTodos.length > 0 && filteredTodos.map(item => {
                return (
                    <div className={styles.todo} key={item.key} data-theme={theme}>
                        <input type="checkbox" checked={item.isCompleted ? true : false} onChange={() => {props.onChange(item.key)}} data-theme={theme}></input>
                        <label data-theme={theme}>{item.text}</label>
                        <button onClick={() => { props.onRemove(item.key)}}></button>
                    </div>)
            })}
            <div className={styles['filter-section']} data-theme={theme}>
                <label>{filteredTodos.filter((item) => item.isCompleted === false).length} items left</label>
                <TodoFilter onFilter={filterChangedHandler}/>
                <button type='submit' onClick={props.onClearCompleted} data-theme={theme}>Clear Completed</button>
            </div>
        </div>
    );
}
 
export default TodoList;