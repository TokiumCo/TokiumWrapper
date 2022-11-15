import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import { GatedRoute } from './components';
import App from './App'
import GatedSite from './GatedSite'
import { TokiumProvider } from './components/TokiumContext'

const pubkey = 'ppozQkdxfndUxBf5jmgwpc1vSKt3H8bRVqDx7QtBWd5';
const collection = 'https://magiceden.io/marketplace/paragons';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Wrap App component in TokiumProvider to give verified context to children components
    <TokiumProvider pubkey={pubkey} collection={collection}>
    <Router>
        <Routes>
        <Route path='/' element={<App />} />
        <Route path='/GatedSite' element={
            <GatedRoute redirect='/'>
                {<GatedSite />}
            </GatedRoute>
        }
        />
        </Routes>
  </Router>
  </TokiumProvider>
);
