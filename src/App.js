import React from 'react';
import './App.css';
import {Card} from "./Card";
import {Img} from "./Img"

function App() {
  return (
    <div className="App">
        <Card
            title="Card title"
            text="Some quick example text to build on the card title and make up the bulk of
               the card's content.">
            <Img url="https://salon-oboev.ru/files/products/thumb250/rasch/barbara/201143-527384.jpg"/>
        </Card>
        <Card
            title="Special title treatment"
            text="With supporting text below....">
        </Card>
    </div>
  );
}

export default App;
