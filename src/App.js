import logo from './logo.svg';
import './App.css';
import ClassTest from './components/ClassTest';
import GreetFunctional from './components/GreetFunctional';
import Stateless from './components/Stateless';
import Stateful from './components/Stateful';
import Hello from './components/Hello';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      {/* <ClassTest />
    <GreetFunctional/>
    <Stateless name="Sagar" email="iliussagar@gmail.com" phone="8801830596312"/>
    <Stateful name="Sagar1" email="iliussagar1@gmail.com" phone="8801730596312"/> */}

    {/* <Hello /> */}

    <Greet name="Bruce" heroName="Batman">
      <p>This is children props</p>
    </Greet>
    <Greet name="Clark" heroName="Superman">
      <button>Action</button>
    </Greet>
    <Greet name="Diana" heroName="Wonder woman"/>

    
    </div>
  );
}

export default App;
