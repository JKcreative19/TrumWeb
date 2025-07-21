import React from 'react';
import NewsList from './components/NewsList';
import './styles/main.css';

function App() {
    return (
        <div className="app">
            <h1 className="text-center text-2xl font-bold">News Website</h1>
            <NewsList />
        </div>
    );
}

export default App;