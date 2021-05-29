import { Navbar,Nav,NavDropdown,Button,Jumbotron, Container } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import Data from './Data.js';
import Detail from './Detail.js';
 
import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [shoes,shoesCH] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Shoe shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link  as={Link} to="/detail">Detail</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
 
    
        
    <Route exact path="/">

      <Jumbotron className="background">
        <h1>20% Season OFF</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      <div className="Container">
        <div className="row">
        { 
          shoes.map((a,i)=>{
            return <Card shoes={shoes[i]} i={i} key={i}/>
          })
        }
        </div>
      </div>
    </Route>

    <Route path="/detail/:id">
        <Detail shoes={shoes}/>
    </Route>

    {/* <Route path="/:id">
      <div>아무거나 적었을 때 이거 보여주셈</div>
    </Route> */}
{/* <Routh path="/어쩌구" component={Modal} > </Routh> */}
  </div>
  )
}


function Card(props){
  return(
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) + '.jpg'} width="100%" />
      <h4> { props.shoes.title } </h4>
      <p> { props.shoes.content+", "+ props.shoes.price } </p>
    </div>
  )
}

export default App;
