import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import {Login} from './pages/Login';
import {Signup} from './pages/Signup';
import {About} from './pages/About';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
