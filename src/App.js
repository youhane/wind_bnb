import Card from "./component/Card/Card";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import { GlobalStyle } from "./GlobalStyles";
import { HOTEL_DATA } from "./stays";

function App() {
  return (
    <div className="App">
      <Navbar />
      <body>
        <div className="title">
          <h2>Stays in Finland</h2>
          <p>12+ stays</p>
        </div>
        <div className="grid">
          {HOTEL_DATA.map((hotel) => {
            return <Card
              host={hotel.superHost}
              room={hotel.type}
              beds={hotel.beds}
              rating={hotel.rating}
              desc={hotel.type}
              img={hotel.photo}
            />
          })}
        </div>
      </body>
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;
