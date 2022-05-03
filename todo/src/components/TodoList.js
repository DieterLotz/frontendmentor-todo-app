import React, { useEffect, useState} from 'react';
import styles from './TodoList.module.scss';
import './../styles/_checkbox.scss';
import TodoFilter from './TodoFilter';

const TodoList = (props) => {
    const [filteredList, setFilteredList] = useState(props.todos);

    useEffect(() => {
        setFilteredList(props.todos);
    }, [props.todos]);
    
    const filterTodos = selection => {
        switch (selection) {
            case 'all':
              setFilteredList(props.todos);
              break;
            case 'active':
              setFilteredList(_ => {
                return props.todos.filter(e => e.isCompleted === false);
              });
              break;
            case 'complete':
                setFilteredList(_ => {
                    return props.todos.filter(e => e.isCompleted === true);
                });
              break;
            default:
              throw new Error('Invalid selection. @Component: TodoApp');
          }
    };

    return (
        <div className={styles['todo-list-container']}>
            {filteredList.length > 0 && filteredList.map(item => {
                return (
                    <div className={styles.todo} key={item.key}>
                        <input type="checkbox" checked={item.isCompleted ? true : false} onChange={() => {props.onChange(item.key)}}></input>
                        <label>{item.text}</label>
                        <button onClick={() => { props.onRemove(item.key)}}></button>
                    </div>)
            })}
            <div>
                <label>{filteredList.filter((item) => item.isCompleted === false).length} items left</label>
                <TodoFilter onFilter={filterTodos}/>
                <button type='button' onClick={props.onClearCompleted}>Clear Completed</button>
            </div>
        </div>
    );
}
 
export default TodoList;