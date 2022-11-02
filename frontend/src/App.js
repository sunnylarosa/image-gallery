// useState is a function so we could easily manage state of component, in this case the App component
// useState must be called inside a functional component.
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
  // useState accept 2 parameters: a string and a function
  // First parameter, a string, will be stored in the variable 'word'
  // Second parameter, a function, will be called 'setWord' in order to update the value of variable word
  // the '' inside useState is an initial value which is empty string
  // *Notes: anytime when the state function (in this case useState()) being called, the component will be re-rendered.
  //       : this useState() function being called from Search.js component
  const [word, setWord] = useState("");

  // Later this function will be send to <Search /> as its property (handleSubmit)
  // Then in Search.js, the Search() component will accept and put it in variable named handleSubmit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target[0].value);
    console.log(word);
  };

  return (
    <div>
      <Header title="Images Gallery" />
      {/* Pass variable word & setWord & handleSearchSubmit() function to Search component */}
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
