import './App.css';
import Experience from './components/Experience';
import HeaderBar from './components/HeaderBar';
import MainInfo from './components/MainInfo';
import Studies from './components/Studies';
import Tecnologies from './components/Tecnologies';

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <MainInfo />
      <Tecnologies />
      <Experience />
      <Studies />
    </div>
  );
}

export default App;
