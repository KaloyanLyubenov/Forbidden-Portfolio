import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPageContainer from './components/main-page/MainPageContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={MainPageContainer} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
