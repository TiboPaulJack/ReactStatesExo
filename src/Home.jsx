import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';



const Home = () => {


    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link className='App-link' to='/recettes'>Recettes</Link>
      </header>
    
    </div>
    );
}



export default Home;