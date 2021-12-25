import Card from "./component/Card/Card";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>Stays in Finland</h2>
      <div className="grid">
        <Card />
      </div>
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;
