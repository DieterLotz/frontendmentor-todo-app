import './App.scss';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className='app'>
      <header>
        <h1>todo</h1>
      </header>
      <main>
        <TodoContainer>
          
        </TodoContainer>
      </main>
    </div>
  );
}

export default App;
