import "./App.css";

import Navbar from "./components/Navbar";
import ImagesGroup from "./components/ImageGroup";
import Content from "./components/Content";
import Card from "./components/Card";

import data from "./data/data.jsx";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <ImagesGroup />
        <Content />
      </div>
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
