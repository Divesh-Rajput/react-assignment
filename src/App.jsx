import Data from './Data';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Protected from './components/Protected';
import LoginForm from './components/Login';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dash" element={<Protected Component={Data} />} />
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
