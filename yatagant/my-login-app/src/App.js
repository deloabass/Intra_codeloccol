import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Home">
          <a href="/home">Home</a>
          <a href="/about">About Us</a>
          <a href="/about">Service</a>
          <a href="/about">Contact</a>
        </div>

        <button className="welcome">Welcome to our website!</button>
      </header>
      <h1>Hello World!</h1>
      <button className="abassa" onClick={() => console.log("You clicked me!")}>Click Me</button>
    </div>
  );
}
const abassa = ({
  name: "Abassou Amadou",
  age: 25,
});
console.log(abassa);


// Importing the necessary modules and components


export default App;

