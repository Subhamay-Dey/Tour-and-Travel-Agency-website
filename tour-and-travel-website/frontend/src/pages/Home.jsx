import React from 'react';
import "../styles/home.scss";
import { Container, Row, Col } from 'reactstrap';
import heroImg from "../images/tour-img01.jpg";
import heroImg02 from "../images/tour-img02.jpg";
import heroImg03 from "../images/tour-img03.jpg";


const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content"></div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home