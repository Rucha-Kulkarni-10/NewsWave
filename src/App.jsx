
import './App.css';
import React from 'react'
import Pagination from './components/Pagination';
import Stories from './components/Stories';
import Sources from './components/Sources';

function App() {
  // const data = useGlobalContext();
  return (
    <>
    {/* <div>
        Welcome to news app {data}
    </div> */}
         <Sources />
         <Pagination />
         <Stories />
    </>
  );
}

export default App;
