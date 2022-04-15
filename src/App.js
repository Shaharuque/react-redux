import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import Posts from './features/posts/Posts';
import AddForm from './features/posts/AddForm';

function App() {
  return (
    <div className="App">
      <h1>hellow to redux</h1>
      <Counter></Counter>
      <AddForm></AddForm>
      <Posts></Posts>
      
    </div>
  );
}

export default App;
