import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

// Later this function will be send to <Search /> as its property (handleSubmit)
// Then in Search.js, the Search() component will accept and put it in variable named handleSubmit
const handleSearchSubmit = (e) => {
  e.preventDefault();
  // console.log(e);
  console.log(e.target[0].value);
};

const App = () => {
  return (
    <div>
      <Header title="Images Gallery" />
      {/* Passing handleSearchSubmit() function to Search component */}
      <Search handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
