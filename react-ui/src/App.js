import { Lockscreen } from './components';
import './index.css';

function App() {
  const pubkey = 'ppozQkdxfndUxBf5jmgwpc1vSKt3H8bRVqDx7QtBWd5';
  return (
    <div className="App">
      <div className='locked-form'>
        <Lockscreen pubkey={pubkey}>
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
    </div>
  );
}

export default App;
