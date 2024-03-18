import logo from './logo.JPG';
import './App.css';
import Dal_Logo from './Dal_Logo.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to CSCI3172, Wenxu Zhang Lab6!</h1>
        <p>
        2024-03-18 23:59:00
        </p>
        <img src={logo} className="App-logo" alt="logo" /><br></br>
        <a
          className="App-link"
          href="https://github.com/Jessewx/Wenxu_CSCI3172_lab6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lab6 Github repository
        </a>
        <a
          className="App-link2"
          href="https://git.cs.dal.ca/wenxu/csci3172/-/tree/main/labs/lab5?ref_type=heads"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lab6 Gitlab repository
          </a>
      </header>

      <main className='App-main'>
      <h1>"Cogito, ergo sum." (René Descartes)</h1>
      </main>

      <footer className='App-footer'>
        <p>Wenxu Zhang (he/him)</p>
        <p>Undergraduate Student of Apply Computer Science</p>
        <p>Email:wn567230@dal.ca</p>
        <p>https://web.cs.dal.ca/~wenxu/csci3172/lab6/</p>
        <p>
          <img src={Dal_Logo} className="Dal-Logo" alt="Dal-logo"/>
        </p>
      </footer>
      
    </div>
  );
}

export default App;
