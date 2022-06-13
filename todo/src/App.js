import React, { useContext } from 'react';
import TodoApp from './components/TodoApp';
import styles from './App.module.scss';
import { ThemeContext } from './store/ThemeContext';
function App() {
  const context = useContext(ThemeContext);

  return (
    <div className={styles.app}>
      <header data-theme={context.theme}></header>
      <main data-theme={context.theme}>
        <TodoApp/>
      </main>
    </div>
  );
}

export default App;
