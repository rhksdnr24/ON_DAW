import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

export default function App() {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#222',
    padding: '15px 30px', // 패딩을 늘려서 높이를 키움
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  };

  const navStyle = {
    display: 'flex',
    gap: '40px', // 간격 늘림
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#ddd',
    fontSize: '20px', // 폰트 크기 증가
    fontWeight: '600',
    transition: 'color 0.3s',
  };

  return (
    <Router>
      <div style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
        {/* Header with Logo */}
        <header style={headerStyle}>
          <Link to="/">
            <img
              src="/logo.png"
              alt="ON_DAW Logo"
              style={{ height: '60px', cursor: 'pointer' }} // 로고 크기 증가
            />
          </Link>
          <nav style={navStyle}>
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="/about">About</Link>
            <Link style={linkStyle} to="/login">Login</Link>
          </nav>
        </header>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
