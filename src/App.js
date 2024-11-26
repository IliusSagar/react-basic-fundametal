import logo from './logo.svg';
import './App.css';
import ClassTest from './components/ClassTest';
import GreetFunctional from './components/GreetFunctional';
import Stateless from './components/Stateless';
import Stateful from './components/Stateful';

function App() {
  return (
    <div className="App">
      <ClassTest />
    <GreetFunctional/>
    <Stateless name="Sagar" email="iliussagar@gmail.com" phone="8801830596312"/>
    <Stateful name="Sagar1" email="iliussagar1@gmail.com" phone="8801730596312"/>
    </div>
  );
}

export default App;
