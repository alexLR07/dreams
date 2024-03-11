import React, { useEffect }from 'react';
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
import C1 from './assets/img/evento-internacional.jpg';
import {Link} from 'react-router-dom';
import CF1 from './assets/img/fest-int-cervantino.jpg';
import CF2 from './assets/img/fest-giff.jpeg';
import CF3 from './assets/img/fest-vive-latino.jpg';
import CF4 from './assets/img/fest-int-danza-morelia.jpg';
import CF5 from './assets/img/fest-int-rivera-maya.jpg';
import CF6 from './assets/img/fest-int-los-cabos.jpg';

function EventosInternacionales() {
    /* Evita y anula que se vea el fondo del formulario de acceso y registro en todas las
    páginas */
    useEffect(() => {
        document.body.style.background = 'none';
    }, []);
  return (
    <div>
        <header class="header">
            <a href='/' class="logo"><Link to='/'><img src={Logo}alt=''/></Link></a>
            <input type='checkbox' id="check"/>
            <label for="check" class="icons">
                <IoMenu id="menu-icon"/>
                <IoMdClose id="close-icon"/>
            </label>
            <nav class="nav-bar">
                <a href='https://www.DreamScape-inicio.com' style={{"--i":0}}><Link to='/'><MdHomeFilled class="icon"/>Inicio</Link></a>
                <a href='https://www.DreamScape-pueblos-magicos.com' style={{"--i":1}}><Link to='/pueblos-magicos'><MdChurch class="icon"/>Pueblos Mágicos</Link></a>
                <a href='https://www.DreamScape-eventos-internacionales.com' style={{"--i":2}}><Link to='/eventos-internacionales' class="active"><FaCalendarAlt class="icon"/>Eventos Internacionales</Link></a>
                <a href='https://www.DreamScape-ecoturismo.com' style={{"--i":3}}><Link to='/ecoturismo'><MdNaturePeople class="icon"/>Ecoturismo</Link></a>
                <a href='https://www.DreamScape-contacto.com' style={{"--i":4}}><Link to='/contacto'><MdPhone class="icon"/>Contacto</Link></a>
            </nav>
        </header>
        <Carousel fade class="custom-carousel" indicators={false} controls={false}>
            <Carousel.Item>
                <img className="d-block w-100" src={C1} alt="First slide"/>
                <div class="overlay"></div>
                <Carousel.Caption>
                <h5>Descubre los eventos internacionales</h5>
                <p class="carousel-text">México es sede de eventos internacionales de renombre mundial que atraen a visitantes de todas partes del globo, desde festivales
                de música hasta eventos deportivos, siempre hay algo emocionante sucediendo en nuestro país.<br/>
                !ÚNETE A LA CELEBRACIÓN Y VIVE EXPERIENCIAS INOLVIDABLES QUE TE DEJARÁN CON GANAS DE MÁS¡
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className="card-grid">
            <div className="card-container">
                <div className="card">
                    <div className="card-front">
                        <img src={CF1} class="font-card" alt=''/>
                        <h3 class="font-text">Festival Internacional Cervantino, Guanajuato</h3>
                    </div>
                    <div className="card-back">
                        <h3>Festival Internacional Cervantino, Guanajuato</h3>
                        <p>Uno de los eventos culturales más importantes de América Latina, durante tres semanas, Guanajuato se convierte en un escenario de música, teatro, danza
                            y artes visuales de todo el mundo. Celebra la creatividad y la diversidad en este emocionante festival.
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
                        <h3 class="font-text">Festival Internacional de Cine Guadalajara, Jalisco</h3>
                    </div>
                    <div className="card-back">
                        <h3>Festival Internacional de Cine Guadalajara, Jalisco</h3>
                        <p>Este evento reúne a cineastas, actores y amantes del cine de todo el mundo para celebrar la excelencia cinematográfica y promover el intercambio cultural,
                            sumérgete en proyecciones, mesas redondas y talleres que hacen de este festival una experiencia única.
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
                        <h3>Festival Vive Latino, Ciudad de México</h3>
                    </div>
                    <div className="card-back">
                        <h3>Festival Vive Latino, Ciudad de México</h3>
                        <p>Durante dos días, la Ciudad de México se convierte en el epicentro de la música latina con actuaciones de artistas nacionales e internacionales, únete a la
                            celebración y disfruta de la energía contagiosa de este icónico festival.
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
                        <h3 class="font-text">Festival Internacional de la Música y la Danza de Morelia, Michoacán</h3>
                    </div>
                    <div className="card-back">
                        <h3>Festival Internacional de la Música y la Danza de Morelia, Michoacán</h3>
                        <p>Este evento anual presenta espectáculos de música clásica, contemporánea y folclórica en algunos de los lugares más emblemáticos de la ciudad, sumérgete en la
                            magia de la música y la danza en este festival único.
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
                        <h3 class="font-text">Festival Internacional de Jazz de Rivera Maya, Quintana Roo</h3>
                    </div>
                    <div className="card-back">
                        <h3>Festival Internacional de Jazz de Rivera Maya, Quintana Roo</h3>
                        <p>El Festival Internacional de Jazz de Riviera Maya reúne a renombrados músicos de jazz de todo el mundo para ofrecer conciertos memorables en escenarios impresionantes
                            junto al mar, disfruta de la música, la playa y la buena compañía en este evento inolvidable.
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
                        <h3 class="font-text">Festival Internacional de Cine de Los Cabos, Baja California Sur</h3>
                    </div>
                    <div className="card-back">
                        <h3>Festival Internacional de Cine de Los Cabos, Baja California Sur</h3>
                        <p>Este evento reúne a cineastas, actores y amantes del cine de todo el mundo para celebrar lo mejor del cine independiente y de autor, disfruta de proyecciones al aire libre,
                            eventos especiales y encuentros con la industria cinematográfica en este emocionante festival.
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

export default EventosInternacionales;