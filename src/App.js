import Footer from "./component/Footer/Footer";
import Logo from "./component/Logo/Logo";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <Logo />
      <h1>App</h1>
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;
