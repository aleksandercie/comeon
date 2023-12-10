import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage';
import './semantic.css';
import './App.css';
import { useSelector } from 'react-redux';
import { selectAuth } from './feature/authSlice';

function App() {
  const { data } = useSelector(selectAuth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route element={<ProtectedRoute data={data} />}>
          <Route path="/dashboard" element={<Dashboard data={data} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
