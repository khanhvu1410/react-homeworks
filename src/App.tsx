import './App.css';
import { AppRoutes } from './routes';
import { useRoutes } from 'react-router';

function App() {
  let element = useRoutes(AppRoutes);
  return element;
}

export default App;
