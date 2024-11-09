import BookList from "./components/BookList";
import Header from "./components/Header";
import Banner from "./components/Banner";
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header/>
      <Banner/>
     <BookList/>
    </div>
  );
}

export default App;
