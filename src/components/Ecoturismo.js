import React, { useEffect } from 'react';
import './css/style.css';
import './css/Carousel.css';
import './css/Card.css'
import Logo from './assets/img/Logo.png';
import { MdHomeFilled } from "react-icons/md";
import { MdChurch } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { MdNaturePeople } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import C1 from './assets/img/ecoturismo.jpg';
import {Link} from 'react-router-dom';
import CF1 from './assets/img/eco-bio-sian.jpg';
import CF2 from './assets/img/eco-bio-triunfo.jpg';
import CF3 from './assets/img/eco-bio-calakmul.jpg';
import CF4 from './assets/img/eco-bio-ria.jpeg';
import CF5 from './assets/img/eco-bio-sierra.jpeg';
import CF6 from './assets/img/eco-bio-tehuacan.jpg';

function Ecoturismo() {
    /* Evita y anula que se vea el fondo del formulario de acceso y registro en todas las
    páginas */
    useEffect(() => {
        document.body.style.background = 'none';
    }, []);
  return (
    <div>
        <header class="header">
            <a href='/' class="logo"><Link to='/'><img src={Logo} alt=''/></Link></a>
            <input type='checkbox' id="check"/>
            <label for="check" class="icons">
                <IoMenu id="menu-icon"/>
                <IoMdClose id="close-icon"/>
            </label>
            <nav class="nav-bar">
                <a href='https://www.DreamScape-inicio.com' style={{"--i":0}}><Link to='/'><MdHomeFilled class="icon"/>Inicio</Link></a>
                <a href='https://www.DreamScape-pueblos-magicos.com' style={{"--i":1}}><Link to='/pueblos-magicos'><MdChurch class="icon"/>Pueblos Mágicos</Link></a>
                <a href='https://www.DreamScape-eventos-internacionales.com' style={{"--i":2}}><Link to='/eventos-internacionales'><FaCalendarAlt class="icon"/>Eventos Internacionales</Link></a>
                <a href='https://www.DreamScape-ecoturismo.com' style={{"--i":3}}><Link to='/ecoturismo' class="active"><MdNaturePeople class="icon"/>Ecoturismo</Link></a>
                <a href='https://www.DreamScape-contacto.com' style={{"--i":4}}><Link to='/contacto'><MdPhone class="icon"/>Contacto</Link></a>
            </nav>
        </header>
        <Carousel fade class="custom-carousel" indicators={false} controls={false}>
            <Carousel.Item>
                <img className="d-block w-100" src={C1} alt="First slide"/>
                <div class="overlay"></div>
                <Carousel.Caption>
                <h5>Descubre los ecoturismos</h5>
                <p class="carousel-text">Explora la naturaleza virgen y la biodiversidad de México a través de nuestras opciones de ecoturismo, desde la observación
                de ballenas en la costa del Pacífico hasta la exploración de selvas tropicales y cascadas escondidas, hay aventuras para todos los amantes de la naturaleza.<br/>
                !VEN Y CONÉCTATE CON EL ENTORNO EN SU ESTADO MÁS PURO¡
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className="card-grid">
            <div className="card-container">
                <div className="card">
                    <div className="card-front">
                        <img src={CF1} class="font-card" alt=''/>
                        <h3 class="font-text">Reserva de la Biosfera Sian Ka'an, Quintana Roo</h3>
                    </div>
                    <div className="card-back">
                        <h3>Reserva de la Biosfera Sian Ka'an, Quintana Roo</h3>
                        <p>Un paraíso natural en la costa caribeña de México. Este destino de ecoturismo ofrece una amplia variedad de ecosistemas, incluyendo selvas, manglares,
                            lagunas y arrecifes de coral, disfruta de actividades como observación de aves, snorkel, kayak y paseos en lancha mientras te sumerges en la
                            biodiversidad de este lugar único.
                        </p>
                        <div class="link">
                            <a href='https://www.DreamScape-Detalles.com'><Link to='#'>Ver más detalles</Link></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <div className="card-front">
                        <img src={CF2} class="font-card" alt=''/>
                        <h3>Reserva de la Biosfera El Triunfo, Chiapas</h3>
                    </div>
                    <div className="card-back">
                        <h3>Reserva de la Biosfera El Triunfo, Chiapas</h3>
                        <p>Una de las áreas protegidas más importantes de México. Hogar de una gran diversidad de flora y fauna, este destino ofrece oportunidades para practicar senderismo,
                            observación de aves y exploración de bosques nubosos, sumérgete en la naturaleza virgen y la tranquilidad de este impresionante lugar.
                        </p>
                        <div class="link">
                            <a href='https://www.DreamScape-Detalles.com'><Link to='#'>Ver más detalles</Link></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <div className="card-front">
                        <img src={CF3} class="font-card" alt=''/>
                        <h3 class="font-text">Reserva de la Biosfera Calakmul, Campeche</h3>
                    </div>
                    <div className="card-back">
                        <h3>Reserva de la Biosfera Calakmul, Campeche</h3>
                        <p>Un tesoro oculto en la selva de Campeche, este destino de ecoturismo te invita a explorar antiguas ruinas mayas, observar jaguares y monos aulladores, y descubrir la
                            riqueza de la selva tropical, con actividades como senderismo, avistamiento de fauna y visitas a sitios arqueológicos, Calakmul ofrece una experiencia inolvidable en
                            contacto con la naturaleza.
                        </p>
                        <div class="link">
                            <a href='https://www.DreamScape-Detalles.com'><Link to='#'>Ver más detalles</Link></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <div className="card-front">
                        <img src={CF4} class="font-card" alt=''/>
                        <h3 class="font-text">Reserva de la Biosfera Ría Celestún, Yucatán</h3>
                    </div>
                    <div className="card-back">
                        <h3>Reserva de la Biosfera Ría Celestún, Yucatán</h3>
                        <p>Un santuario de vida silvestre en la costa de Yucatán, conocido por sus flamencos rosados, manglares y playas vírgenes, este destino ofrece oportunidades para practicar
                            observación de aves, kayak y natación en aguas cristalinas, sumérgete en la serenidad de este paraíso natural y descubre la magia de la vida silvestre.
                        </p>
                        <div class="link">
                            <a href='https://www.DreamScape-Detalles.com'><Link to='#'>Ver más detalles</Link></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <div className="card-front">
                        <img src={CF5} class="font-card" alt=''/>
                        <h3 class="font-text">Reserva de la Biosfera Sierra Gorda, Querétaro</h3>
                    </div>
                    <div className="card-back">
                        <h3>Reserva de la Biosfera Sierra Gorda, Querétaro</h3>
                        <p>Una joya escondida en el corazón de México, este destino de ecoturismo ofrece una gran diversidad de paisajes, desde bosques de pino hasta cañones y cascadas impresionantes,
                            disfruta de actividades como senderismo, rappel, observación de aves y visita a comunidades indígenas mientras te sumerges en la belleza y la cultura de la Sierra Gorda.
                        </p>
                        <div class="link">
                            <a href='https://www.DreamScape-Detalles.com'><Link to='#'>Ver más detalles</Link></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <div className="card-front">
                        <img src={CF6} class="font-card" alt=''/>
                        <h3 class="font-text">Reserva de la Biósfera Tehuacán-Cuicatlán, Puebla y Oaxaca</h3>
                    </div>
                    <div className="card-back">
                        <h3>Reserva de la Biósfera Tehuacán-Cuicatlán, Puebla y Oaxaca</h3>
                        <p>Un desierto semiárido que alberga una increíble diversidad de flora y fauna, hogar de cactus gigantes, aves endémicas y pinturas rupestres prehispánicas, este destino ofrece
                            oportunidades únicas para explorar la naturaleza y la historia de México, sumérgete en paisajes impresionantes y descubre la magia del desierto en este fascinante lugar.
                        </p>
                        <div class="link">
                            <a href='https://www.DreamScape-Detalles.com'><Link to='#'>Ver más detalles</Link></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ecoturismo;