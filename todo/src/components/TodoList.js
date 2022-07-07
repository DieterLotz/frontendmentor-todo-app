import React, { useState, useContext, useRef } from 'react';
import styles from './TodoList.module.scss';
import './../styles/_checkbox.scss';
import TodoFilter from './TodoFilter';
import { ThemeContext } from './../store/ThemeContext';

const TodoList = (props) => {
    const [filterCondition, setFilterCondition] = useState('all');
    const { theme } = useContext(ThemeContext);
    const taregtDropElementId = useRef();

    const filteredTodos = 
        filterCondition === 'all' ? 
        props.todoList 
        : filterCondition === 'active' ? 
        props.todoList.filter(e => e.isCompleted === false) 
        : props.todoList.filter(e => e.isCompleted === true);

    const filterChangedHandler = (condition) => {
        setFilterCondition(condition);
    };

    const dragStartHandler = (event) => {
        event.dataTransfer.setData("text/plain", event.target.id);
    };

    const dragOverHandler = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move"; 
       if(event.target.id !== "" && event.target.id !== taregtDropElementId.current){
        console.log("Target: " + event.target.id + "Text: " + event.target.innerText);
        taregtDropElementId.current = event.target.id;
       }      
    };

    const dropHandler = (event) => {
        event.preventDefault();
        const insertTodoId = event.dataTransfer.getData("text/plain");

        const insertTodo = filteredTodos.find(todo => todo.key === insertTodoId);
        const insertAtTodo = filteredTodos.find(todo => todo.key === taregtDropElementId.current);
        const insertAtTodoIndex = filteredTodos.indexOf(insertAtTodo);
        
        const remainingTodos = filteredTodos.filter(todo => todo.key !== insertTodoId);

        if(insertAtTodoIndex !== -1){
            remainingTodos.splice(insertAtTodoIndex, 0, insertTodo);
            props.setTodoList(remainingTodos);
        }        
    };

    return (
        <div className={styles['todo-list-container']} data-theme={theme}>
          {filteredTodos.length > 0 && filteredTodos.map(todo => {
            return (
                <div className={styles.todo} 
                    id={todo.key} 
                    key={todo.key} 
                    draggable={true} 
                    onDragStart={dragStartHandler}
                    onDragOver={dragOverHandler}
                    onDrop={dropHandler}>
                    <input type="checkbox" checked={todo.isCompleted} onChange={() => {props.onChange(todo.key)}}></input>
                    <label>{todo.text}</label>
                    <button onClick={() => { props.onRemove(todo.key)}}></button>
                </div>)
            })}
            <div className={styles['filter-section']}>
                <label>{filteredTodos.filter((todo) => todo.isCompleted === false).length} items left</label>
                <TodoFilter onFilter={filterChangedHandler}/>
                <button type='submit' onClick={props.onClearCompleted}>Clear Completed</button>
            </div>
        </div>
    );
}
 
export default TodoList;