import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import TextInputPage from './pages/TextInputPage';
import TextInputPageTest from './pages/TextInputPageTest';
// import TextInputPage from './pages/TextInputPage'; // TextInputPage 경로에 맞게 조정

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </p>


        <p>
          <button
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={() => navigate('/text-input')}
          >
            Go to Text Input Page
          </button>
          <button
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={() => navigate('/text-input2')}
          >
            TextInput2
          </button>
        </p>


        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text-input" element={<TextInputPage />} />
        <Route path="/text-input2" element={<TextInputPageTest />} />
      </Routes>
    </Router>
  );
}

export default App;
