import React, { useEffect } from 'react';
import './css/style.css';
import './css/Carousel.css';
import './css/Card.css';
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
import C1 from './assets/img/pueblos_magicos.jpg';
import {Link} from 'react-router-dom';
import CF1 from './assets/img/valle-de-bravo.jpg';
import CF2 from './assets/img/tulum-quintana-roo.jpeg';
import CF3 from './assets/img/san-cristobal-de-las-chiapas.jpg';
import CF4 from './assets/img/mazamitla-jalisco.jpg';
import CF5 from './assets/img/real-de-catorce.jpg';
import CF6 from './assets/img/bacalar.jpg';

function PueblosMagicos() {
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
                <a href='https://www.DreamScape-pueblos-magicos.com' style={{"--i":1}}><Link to='/pueblos-magicos' class="active"><MdChurch class="icon"/>Pueblos Mágicos</Link></a>
                <a href='https://www.DreamScape-eventos-internacionales.com' style={{"--i":2}}><Link to='/eventos-internacionales'><FaCalendarAlt class="icon"/>Eventos Internacionales</Link></a>
                <a href='https://www.DreamScape-ecoturismo.com' style={{"--i":3}}><Link to='/ecoturismo'><MdNaturePeople class="icon"/>Ecoturismo</Link></a>
                <a href='https://www.DreamScape-contacto.com' style={{"--i":4}}><Link to='/contacto'><MdPhone class="icon"/>Contacto</Link></a>
            </nav>
        </header>
        <Carousel fade class="custom-carousel" indicators={false} controls={false}>
            <Carousel.Item>
                <img className="d-block w-100" src={C1} alt="First slide"/>
                <div class="overlay"></div>
                <Carousel.Caption>
                <h5>Descubre los pueblos mágicos</h5>
                <p class="carousel-text">Adéntrate en los encantadores Pueblos Mágicos de México, donde el tiempo parece detenerse y la magia se hace presente, con sus
                calles empedradas, coloridas casas y ambiente acogedor, estos pueblos te transportarán a una época pasada llena de historia y tradicoón.<br/>
                !VEN Y DÉJATE CAUTIVAR POR SU ENCANTO ÚNICO¡
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className="card-grid">
            <div className="card-container">
                <div className="card">
                    <div className="card-front">
                        <img src={CF1} class="font-card" alt=''/>
                        <h3>Valle de Bravo</h3>
                    </div>
                    <div className="card-back">
                        <h3>Valle de Bravo</h3>
                        <p>Un destino que combina la belleza natural con la elegancia colonial. Con su pintoresco lago, sus calles
                            empedradas y sus impresionantes paisajes, Vallede Bravo te invita a disfrutar de actividades al aire libre, relajación y una rica historia culturala.
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
                        <h3>Tulum, Quintana Roo</h3>
                    </div>
                    <div className="card-back">
                        <h3>Tulum, Quintana Roo</h3>
                        <p>Sumérgete en la historia en las ruinas arqueológicas, relájate en las impresionantes playas y disfruta de la vibrante escena gastronómica y cultural de
                            este encantador pueblo caribeño.
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
                        <h3>San Cristobal de las Casas, Chiapas</h3>
                    </div>
                    <div className="card-back">
                        <h3>San Cristobal de las Casas, Chiapas</h3>
                        <p>un destino lleno de color, cultura y tradición en el corazón de Chiapas. Con sus calles empedradas, arquitectura colonial y ambiente bohemio, este pueblo te
                            invita a explorar sus mercados artesanales, sitios históricos y paisajes montañosos.
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
                        <h3>Mazamitla, Jalisco</h3>
                    </div>
                    <div className="card-back">
                        <h3>Mazamitla, Jalisco</h3>
                        <p>Conocido como la "Suiza mexicana", este destino ofrece paisajes de bosques de pinos, cabañas acogedoras y una atmósfera tranquila que lo convierte en el escape
                            perfecto de la vida urbana. ¡DISFRUTA DE LAS ACTIVIDADES AL AIRE LIBRE, LA GASTRONOMÍA LOCAL Y LA CALIDEZ DE SU GENTE!
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
                        <h3>Real de Catorce, San Luis Potosí</h3>
                    </div>
                    <div className="card-back">
                        <h3>Real de Catorce, San Luis Potosí</h3>
                        <p>Un pueblo minero convertido en destino turístico único! Con su arquitectura colonial, calles empedradas y paisajes desérticos, este pueblo te invita a sumergirte
                            en su historia, disfrutar de sus misterios y explorar sus antiguas minas.
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
                        <h3>Bacalar, Quintana Roo</h3>
                    </div>
                    <div className="card-back">
                        <h3>Bacalar, Quintana Roo</h3>
                        <p>Sumérgete en aguas cristalinas, explora cenotes secretos y relájate en playas de arena blanca. Bacalar te espera con su belleza natural y su encanto caribeño.
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

export default PueblosMagicos;