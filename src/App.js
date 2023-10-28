import './App.css';
import Header from './components/Header/Header'
import Bestsellers from './components/Bestsellers/Bestsellers'
import Search from './components/Search/Search'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Bestsellers />
      <Search />
    </div>
  );
}

export default App;
