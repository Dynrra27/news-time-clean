import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import './index.css';

const App = () => {
    return (
        <Router>
            <AppLayout />
        </Router>
    );
};

export default App;