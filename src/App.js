import "bootstrap/dist/css/bootstrap.min.css";

import LedList from './components/LedList'

function App() {

  return (
    <div>     
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="#" className="navbar-brand">
          https://ivanovich-hacker.blogspot.com
          </a>
        </nav>
        <div className="container">
          <h2>ReactJS Firebase RGB Led - Nodemcu esp8266 Arduino</h2>
          <LedList/>
        </div>
    </div>
  );
}

export default App;