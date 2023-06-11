import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Search from "../../Components/Search";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Search/>
        <Footer/>
      </header>
    </div>
  );
}

export default Home;
