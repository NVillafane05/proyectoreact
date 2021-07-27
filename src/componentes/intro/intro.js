import React from 'react';
import icon from './icon.png';
import './intro.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Intro = ({titulo}) => {
    return(
        <header>
            <Container>
                <Row>
                    <Col xs={12} sm={4}>
                        <img src={icon} className="icon"></img>
                    </Col>
                    <Col className="texto-intro" xs={12} sm={8}>
                    <h1>{titulo}</h1>
                    <p>Soy Desarrolladora web, estudiante en It!!!</p>
                    </Col>
                </Row>
              </Container>
      
            
        </header>
    );
}
export default  Intro;