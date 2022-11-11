import { Lockscreen } from './components';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className='locked-form'>
        <Lockscreen isLocked={true}>
          <div>
            <form>
              <input type='email' placeholder='email'></input>
              <input type='password' placeholder='password'></input>
            </form>
          </div>
        </Lockscreen>
      </div>
      <div className='locked-img'>
        <Lockscreen isLocked={true}>
          <img src='../public/logo512.png' width={500} height={500} alt='test'/>
          </Lockscreen>  
      </div>
      <div className='locked-sm'>
        <Lockscreen isLocked={true}>
          <div>
            <p>Some Secret Text</p>
          </div>
        </Lockscreen>
      </div>
    </div>
  );
}

export default App;
