// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
//import multiple
import {Button, Alert, Row, Col} from 'react-bootstrap';

import Menu from "./components/Menu";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
// import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Menu />
      <Row className="landing">
        <Col><LeftSide /></Col>        
        <Col><RightSide /></Col>        

        
      </Row>
    </div>
  );
}

export default App;
