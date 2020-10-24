import { HomePage } from './components/homepage';
import './App.css';
import { createGlobalStyle } from "styled-components";
import { NavBar } from './components/navbar';
import { Footer } from './components/footer';



const GlobalStyles = createGlobalStyle`
  @import url('http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,300,400,700');
  body {
    font-family: 'Open Sans', sans-serif;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <NavBar />
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;