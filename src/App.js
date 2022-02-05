import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="app">
      {/* navbar */}
      <Nav />
      {/* banner */}
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        isLargeRow={true}
        fetchUrl={request.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
