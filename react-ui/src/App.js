import { Lockscreen } from './wrapper';
// import {Lockscreen} from "@tokium.co/tokiumwrapper"
import './index.css';
import gatedByTokium from './wrapper/assets/gatedByTokium.png';
import { Link } from 'react-router-dom';
import './wrapper/styles.css';

function App() {
  return (
    <div className="App">
      <img src={gatedByTokium} alt='Gated by Tokium' className='tokiumLogo'/>
      <div className='container'>
        <div className='locked-form'>
          {/* Custom Lockscreen styles */}
          <Lockscreen style={{width: '200px'}}>
            <div>
              <form>
                <input type='email' placeholder='email'></input>
                <input type='password' placeholder='password'></input>
              </form>
            </div>
          </Lockscreen>
        </div>
        <div className='locked-sm'>
            <Lockscreen>
              <div>
                <p>Some Secret Text</p>
              </div>
            </Lockscreen>
        </div>
        <Link to='/GatedSite'>Go to Gated Site</Link>
      </div>
    </div>
  );
}

export default App;
