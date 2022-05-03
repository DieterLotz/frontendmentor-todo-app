import React, { useState } from 'react'
import styles from './TodoFilter.module.scss'

const TodoFilter = (props) => {
  const [allFilterIsActive, setAllFilterIsActive] = useState(true);
  const [activeFilterIsActive, setActiveFilterIsActive] = useState(false);
  const [completedFilterIsActive, setCompletedFilterIsActive] = useState(false);

  const reset = () => {
    setAllFilterIsActive(false);
    setActiveFilterIsActive(false);
    setCompletedFilterIsActive(false);
  }

  const filterBy = (selection) => {
    switch (selection) {
      case 'all':
        reset();
        setAllFilterIsActive(true);
        props.onFilter(selection);
        break;
      case 'active':
        reset();
        setActiveFilterIsActive(true);
        props.onFilter(selection);
        break;
      case 'complete':
        reset();
        setCompletedFilterIsActive(true);
        props.onFilter(selection);
        break;
      default:
        throw new Error('Invalid selection. @Component: TodoFilter');
    }
  };

  return (
    <div className={styles['filter-container']}>
      <button
        type="button"
        className={allFilterIsActive ? styles['active-filter'] : ''}
        onClick={() => filterBy('all')}
      >
        All
      </button>
      <button
        type="button"
        className={activeFilterIsActive ? styles['active-filter'] : ''}
        onClick={() => filterBy('active')}
      >
        Active
      </button>
      <button
        type="button"
        className={completedFilterIsActive ? styles['active-filter'] : ''}
        onClick={() => filterBy('complete')}
      >
        Completed
      </button>
    </div>
  )
}

export default TodoFilter
