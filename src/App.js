import Heading from "./components/Heading";
import Pragraph from "./components/Pragraph";
import GlobalStyle from "./components/GlobalStyle";
function App() {
  return (
    <div className="App">
      <GlobalStyle>
        <Heading />
        <Pragraph />

        <div className="d-flex">
          <Heading />
          <Pragraph />
        </div>
        
      </GlobalStyle>
    </div>
  );
}

export default App;
