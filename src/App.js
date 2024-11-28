
import './App.css';
import CorseForm from './components/CorseForm';


function App() {
  return (
    <div className="main-container">
     <h1 style={{
      fontSize: "2.5rem",
      marginBottom: "2rem"
     }}>My Course list</h1>
     <CorseForm />
    </div>
  );
}

export default App;
