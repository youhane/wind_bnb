import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./component/Card/Card";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import { GlobalStyle } from "./GlobalStyles";

const HOTEL_DATA = [
  {
    host: true,
    room: 'gatau',
    rating: 7.4,
    img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
]

function App() {
  const [imgSrc, setImgSrc] = useState()

  return (
    <div className="App">
      <Navbar />
      <h2>Stays in Finland</h2>
      <div className="grid">
        <Card host room rating img />
      </div>
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;
