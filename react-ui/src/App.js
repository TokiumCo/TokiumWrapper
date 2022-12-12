
import './index.css';
import './wrapper/styles.css';
import DemoPage from './DemoPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { GatedRoute, TokiumProvider } from './wrapper';
import GatedSite from './GatedSite';
import { useState } from 'react';




function App() {
  const [magicEdenURL, setMagicEdenURL] = useState("https://magiceden.io/marketplace/claynosaurz")
  const [pubkey, setPubkey] = useState("jMrEQWGaF5Z6Hu6iUfBovP6KBZUMi5A66oLqJ9KnQKb");
  
  
  const updateStatus = (status) => {
    switch (status) {
      case 'noNFTs':
        setMagicEdenURL('https://magiceden.io/marketplace/claynosaurz');
        setPubkey('jMrEQWGaF5Z6Hu6iUfBovP6KBZUMi5A66oLqJ9KnQKb')
        break;
      case 'unpaid':
        
        setMagicEdenURL('https://magiceden.io/marketplace/gmers');
        setPubkey('jMrEQWGaF5Z6Hu6iUfBovP6KBZUMi5A66oLqJ9KnQKb');
        break;
      case 'paid':
        setMagicEdenURL('https://magiceden.io/marketplace/drippies');
        setPubkey('jMrEQWGaF5Z6Hu6iUfBovP6KBZUMi5A66oLqJ9KnQKb')
        break;
      default:
        setMagicEdenURL('https://magiceden.io/marketplace/shiba_corp');
        setPubkey('jMrEQWGaF5Z6Hu6iUfBovP6KBZUMi5A66oLqJ9KnQKb');
    }
  }
  
  return (
    <div>
      <div>
        <button onClick={()=> updateStatus('unpaid')}>Unpaid</button>
        <button onClick={()=> updateStatus('paid')}>paid</button>
        <button onClick={()=> updateStatus('noNFTs')}>nonfts</button>

      </div>
      <TokiumProvider pubkey={pubkey} collection={magicEdenURL}>
        <Router>
              
              <Routes>
              <Route path='/' element={<DemoPage />} />
              <Route path='/GatedSite' element={
                  <GatedRoute redirect='/'>
                      {<GatedSite />}
                  </GatedRoute>
              }
              />
              </Routes>
        </Router>
      </TokiumProvider>
      
      
    </div>
    
  );
}

export default App;
