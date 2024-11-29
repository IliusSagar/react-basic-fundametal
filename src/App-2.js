
import './App.css';
import CorseForm from './components/CorseForm';
import CourseList from './components/CourseList';


function App() {
  return (
    <div className="main-container">
     <h1 style={{
      fontSize: "2.5rem",
      marginBottom: "2rem"
     }}>My Course list</h1>
     <CorseForm />
     <CourseList />
    </div>
  );
}

export default App;