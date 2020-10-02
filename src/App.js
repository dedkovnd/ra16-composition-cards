import React from 'react';
import './App.css';
import {Cards} from "./Cards";
import {Img} from "./Img";
import {CardBody} from "./CardBody";


function App() {
  return (
    <div className="App">
       <Cards>
           <Img />
           <CardBody title="Card title"
               text="Some quick example text to build on the card title and make up the bulk of
               the card's content.">
           </CardBody>
       </Cards>
        <Cards>
            <CardBody title="Special title treatment"
                      text="With supporting text below....">
            </CardBody>
        </Cards>
    </div>
  );
}

export default App;
