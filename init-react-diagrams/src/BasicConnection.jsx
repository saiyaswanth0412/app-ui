import React from "react";
import ReactDOM from "react-dom";
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
  //1) setup the diagram engine
  var engine = new DiagramEngine();
  engine.installDefaultFactories();

  //2) setup the diagram model
  var model = new DiagramModel();

  //3-A) create a default node
  var node1 = new DefaultNodeModel("source", "rgb(0,192,255)");
  let port1 = node1.addOutPort(" ");
  node1.setPosition(100, 100);

  //3-B) create another default node
  var node2 = new DefaultNodeModel("Destination", "rgb(192,255,0)");
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

