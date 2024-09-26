import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Root from './pages/Root';
import SubPages from './pages/SubPages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Root />} />
        <Route path='/subpages/:idPage' element={<SubPages />} />
      </Routes>
    </Router>
  );
}

export default App;
