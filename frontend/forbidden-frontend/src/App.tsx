import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AnimateRoutes from './components/routes/AnimatedRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <AnimateRoutes />
      </Router>
    </div>
  );
}

export default App;
