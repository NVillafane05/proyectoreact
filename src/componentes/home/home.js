import React from 'react';
import './home.css';
import Intro from '../intro/intro';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Home = () => {
    return(
        <div className="home">
            <Intro titulo= "Natalia villafañe"/>
            <Container>
                <h2>Skills</h2>
                <Row>
                    <Col xs={12} sm={4}>
                        Desarrollo web
                    </Col>
                    <Col  xs={12} sm={4}>
                    testing
                    </Col>
                    <Col  xs={12} sm={4}>
                      sistemas
                    </Col>
                </Row>
                <h2>Experiencia laboral</h2>
                <ul className="exp-laboral">
                    <li>Trabajo 1</li>
                    <li>Trabajo 2</li>
                </ul>
              </Container>
              <Link to="/contacto">Ir a contacto!</Link>

      
        </div>
        
    );
}
export default Home;