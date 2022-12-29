import './App.css';
import TodoList from './pages/TodoList';
import PostContextProvider from './context/PostContext';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <PostContextProvider>
          <TodoList/>
        </PostContextProvider>
      </div>
      
    </div>
  );
}

export default App;
