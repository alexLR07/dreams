import React, { useEffect } from 'react';
import './css/style.css';
import './css/Carousel.css';
import './css/Home.css';
import Logo from './assets/img/Logo.png';
import { MdHomeFilled } from "react-icons/md";
import { MdChurch } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { MdNaturePeople } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
// import { BiLogOut } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import C1 from './assets/img/Turismo-pueblos.gif';
import C2 from './assets/img/Turismo-playa.gif';
import C3 from './assets/img/Turismo-diversion.gif';
import {Link} from 'react-router-dom';
import Grupo from './assets/img/grupo.jpg';
import Grupo1 from './assets/img/grupo1.jpg';
import Viaje from './assets/img/viaje.jpg';
import Viaje1 from './assets/img/viaje1.jpg';

function Home() {
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
                <a href='https://www.DreamScape-inicio.com' style={{"--i":0}}><Link to='/' class="active"><MdHomeFilled class="icon"/>Inicio</Link></a>
                <a href='https://www.DreamScape-pueblos-magicos.com' style={{"--i":1}}><Link to='/pueblos-magicos'><MdChurch class="icon"/>Pueblos Mágicos</Link></a>
                <a href='https://www.DreamScape-eventos-internacionales.com' style={{"--i":2}}><Link to='/eventos-internacionales'><FaCalendarAlt class="icon"/>Eventos Internacionales</Link></a>
                <a href='https://www.DreamScape-ecoturismo.com' style={{"--i":3}}><Link to='/ecoturismo'><MdNaturePeople class="icon"/>Ecoturismo</Link></a>
                <a href='https://www.DreamScape-contacto.com' style={{"--i":4}}><Link to='/contacto'><MdPhone class="icon"/>Contacto</Link></a>
                {/* <button class="btn-logout" style={{"--i":5}}><BiLogOut />Salir</button> */}
            </nav>
        </header>
        <Carousel fade class="custom-carousel" indicators={false}>
            <Carousel.Item>
                <img className="d-block w-100" src={C1} alt="First slide"/>
                <div class="overlay"></div>
                <Carousel.Caption>
                <h5>!BIENVENIDOS A MÉXICO¡</h5>
                <p class="carousel-text">Bienvenidos a bordo de DreamScape, tu puerta de entrada a las maravillas del turismo en México, prepárate para un viaje
                    emocionante a través de paisajes impresionantes, culturas vibrantes y experiencias inolvidables.<br/>
                    !ACOMPÁÑANOS EN ESTA AVENTURA ÚNICA¡
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={C2} alt="Second slide"/>
                <div class="overlay"></div>
                <Carousel.Caption>
                <h5>!BIENVENIDOS A MÉXICO¡</h5>
                <p class="carousel-text">Bienvenidos a bordo de DreamScape, tu puerta de entrada a las maravillas del turismo en México, prepárate para un viaje
                    emocionante a través de paisajes impresionantes, culturas vibrantes y experiencias inolvidables.<br/>
                    !ACOMPÁÑANOS EN ESTA AVENTURA ÚNICA¡
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={C3} alt="Third slide"/>
                <div class="overlay"></div>
                <Carousel.Caption>
                <h5>!BIENVENIDOS A MÉXICO¡</h5>
                <p class="carousel-text">Bienvenidos a bordo de DreamScape, tu puerta de entrada a las maravillas del turismo en México, prepárate para un viaje
                    emocionante a través de paisajes impresionantes, culturas vibrantes y experiencias inolvidables.<br/>
                    !ACOMPÁÑANOS EN ESTA AVENTURA ÚNICA¡
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div class="info-home">
            <h1>Con nosotros</h1>
            <p>Descubre la riqueza de nuestra tierra</p>
            <div class="first-home">
                <div class="home-text">
                    <h2>¿Quiénes somos?</h2>
                    <p class="text-inf-home">Somos DreamScape, una plataforma dedicada a promover el turismo sostenible y responsable en México, nos apasiona mostrar
                    la belleza natural, la riqueza cultural y la diversidad de experiencias que nuestro país tiene para ofrecer. Nuestro equipo está compuesto por
                    expertos en turismo, comprometidos a brindarte una experiencia única y memorable en cada uno de nuestros destinos.<br/>
                    Con nosotros, puedes estar seguro de recibir un servicio personalizado, atención de calidad y la garantía de vivir momentos inolvidables en tus
                    viajes por México.
                    </p>
                </div>
                <div class="image-home">
                    <img src={Grupo} alt=''/>
                    <img src={Grupo1} alt=''/>
                </div>
            </div>
            <div class="first-home-reverse">
                <div class="home-text">
                    <h2>Viaja con nosotros</h2>
                    <p class="text-inf-home">¡ÚNETE A NOSOTROS EN UNA AVENTURA INOLVIDABLE POR LOS DESTINOS MÁS ESPECTACULARES EN MÉXICO!<br/>
                    Cdon nuestro equipo de expertos en turismo, podrás explorar paisajes impresionantes, descubrir culturas fascinantes y vivir experiencias auténticas
                    que te llevarán más allá de los destinos turísticos convencionales, ya sea que busques relajarte en playas paradisíacas, explorar ruinas antiguas o
                    sumergirte en la naturaleza virgen, tenemos el viaje perfecto para ti.<br/>
                    ¡NO ESPERES MÁS, RESERVA TU PRÓIMO VIAJE CON NOSOTROS Y DÉJANOS HACER TUS SUEÑOS DE VIAJE REALIDAD!
                    </p>
                </div>
                <div class="image-home">
                    <img src={Viaje} alt=''/>
                    <img src={Viaje1} alt=''/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;