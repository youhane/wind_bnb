import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;
