import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Root from './pages/Root';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Root />} />
      </Routes>
    </Router>
  );
}

export default App;
