import React from 'react';
import './App.css';
import {Cards} from "./Cards";
import {Img} from "./Img";
import {CardBody} from "./CardBody";
import {CardTitle} from "./CardTitle";
import {CardText} from "./CardText";

function App() {
  return (
    <div className="App">
       <Cards>
           <Img />
           <CardBody>
               <CardTitle title="Card title"/>
               <CardText text="Some quick example text to build on the card title and make up the bulk of
the card's content."/>
           </CardBody>
       </Cards>
        <Cards>
            <CardBody>
                <CardTitle title="Special title treatment"/>
                <CardText text="With supporting text below...."/>
            </CardBody>
        </Cards>
    </div>
  );
}

export default App;
