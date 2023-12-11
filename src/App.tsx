import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage';
import { useSelector } from 'react-redux';
import { selectAuth } from './feature/authSlice';
import { links } from './shared/links';
import './semantic.css';
import './App.css';

const { homepage, dashboard } = links;

function App() {
  const { data } = useSelector(selectAuth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={homepage} element={<Homepage />} />
        <Route element={<ProtectedRoute data={data} />}>
          <Route path={dashboard} element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
