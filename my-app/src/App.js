import { HomePage } from './components/homepage';
import './App.css';
import { createGlobalStyle } from "styled-components";



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
      <HomePage/>
    </div>
  );
}

export default App;