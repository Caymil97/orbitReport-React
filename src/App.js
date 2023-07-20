import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import './components/styling.css';
import useState from 'react';
//import satData from 'satData';
function App() {
  return (
    <div>
      <Banner />
      <Buttons />
      <Table />
    </div>
  );
}

export default App;
