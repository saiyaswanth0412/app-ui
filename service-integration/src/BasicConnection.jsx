import ReactDOM from "react-dom";
import React,{useState,useEffect} from 'react';
import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  LinkModel,
  DiagramWidget,
  DefaultLinkModel
} from "storm-react-diagrams";

import "./styles.css";


const ElmArchitecture = () => {
    useEffect(() => {
        fetchBooks();
    }, [])
    const [books1, setBooks] = useState([]);
    const fetchBooks = async () => {
        console.log("started");
        const data = await fetch('http://localhost:4000/components');
        const books = await data.json();
        setBooks(books);
    }
    console.log(books1);
  //1) setup the diagram engine
  var engine = new DiagramEngine();
  engine.installDefaultFactories();
  console.log("in here");
  //2) setup the diagram model
  var model = new DiagramModel();

  //3-A) create a default node
  var node1 = new DefaultNodeModel(books1[0].name, "rgb(0,192,255)");
  let port1 = node1.addOutPort(" ");
  node1.setPosition(100, 100);

  //3-B) create another default node
  var node2 = new DefaultNodeModel(books1[1].name, "rgb(192,255,0)");
  let port2 = node2.addInPort(" ");
  let port3 = node2.addOutPort(" ");
  node2.setPosition(400, 100);

  // link the ports
  let link1 = port1.link(port2);
  //link1.addLabel("Hello World!");

  //4) add the models to the root graph
  model.addAll(node1, node2, link1);

  //5) load model into engine
  engine.setDiagramModel(model);

  //6) render the diagram!
  return <DiagramWidget className="srd-demo-canvas" diagramEngine={engine} />;
};

function BasicConnection() {
  return (
    <div className="App">

      <ElmArchitecture />
    </div>
  );
}

export default BasicConnection;

