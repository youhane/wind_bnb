import Card from "./component/Card/Card";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import { GlobalStyle } from "./GlobalStyles";

const HOTEL_DATA = [
  {
    host: true,
    room: 'Entire apartment . 2 beds',
    rating: 4.40,
    desc: 'Stylish apartement in center of the city',
    img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    host: false,
    room: 'Private room',
    rating: 4.25,
    desc: 'Cozy, peaceful and private room with...',
    img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    host: false,
    room: 'Entire house',
    rating: 4.96,
    desc: 'Modern House in a remote area',
    img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    host: true,
    room: 'Entire apartment . 2 beds',
    rating: 4.85,
    desc: 'Stylish room in design district',
    img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    host: false,
    room: 'Private room',
    rating: 4.54,
    desc: 'Modern apartment close to nature',
    img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    host: false,
    room: 'Entire house',
    rating: 4.64,
    desc: 'House in a remote area',
    img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
]

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
            return <Card host={hotel.host} room={hotel.room} rating={hotel.rating} desc={hotel.desc} img={hotel.img} />
          })}
        </div>
      </body>
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;
