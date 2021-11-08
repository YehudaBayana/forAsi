import React from 'react';
import './App.css';
import SideBar from './components/features/sideBar/sideBar';
import NavBar from './components/features/navBar/navBar';

export default function App() {
  return (
    <>
      <NavBar />
      <div style={{ maxWidth: '1250px', margin: '0 auto' }}>
        <SideBar />
      </div>
    </>
  );
}
