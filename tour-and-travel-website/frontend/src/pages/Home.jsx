import React from 'react';
import "../styles/home.scss";
import { Container, Row, Col } from 'reactstrap';
import heroImg from "../images/hero-img01.jpg";
import heroImg02 from "../images/hero-img02.jpg";
import heroImg03 from "../images/tour-img03.jpg";
import heroVideo from "../images/hero-video.mp4";
import worldImg from "../images/world.png";
import Subtitle from "../shared/Subtitle";

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className='hero__subtitle d-flex align-items-center'>
                  <Subtitle subtitle={"Know Before You Go"}/>
                  <img src={worldImg} alt="world"/>
                </div>
                <h1>
                  Traveling opens the doors to creating{" "}
                  <span className='highlight'>memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto explicabo magnam accusantium repellat. Quod quisquam quaerat magnam reiciendis, doloribus quos neque a aperiam pariatur quae eum vitae dolorum beatae sequi?
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="video" autoPlay controls loop></video>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar/>

          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>

      {/* ====== featured tour section start ====== */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5'>
              <Subtitle subtitle={"Explore"}/>
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ====== featured tour section end ====== */}

    </>
  )
}

export default Home