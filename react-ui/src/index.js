import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import { GatedRoute } from './wrapper';
import App from './App'
import GatedSite from './GatedSite'
import { TokiumProvider } from './wrapper/context'

// const pubkey = 'ASgysXy4k8xhq1QeQ59kBs8bK5e5jdHwhkuX4Qd7pWTZ';
// const collection = 'https://magiceden.io/marketplace/y00ts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Wrap App component in TokiumProvider to give verified context to children components
  
    
    <App />
);
