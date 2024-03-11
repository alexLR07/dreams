import React from 'react';
import './css/style.css';
import './css/Carousel.css';
import './css/Contacto.css';
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
import C1 from './assets/img/contacto.jpg';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Contacto() {
  /* Evita y anula que se vea el fondo del formulario de acceso y registro en todas las
    páginas */
    useEffect(() => {
      document.body.style.background = 'none';
  }, []);
  const initialValues = {name: "", email: "", tel: "", asent: "", msg: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    //console.log(e.target);
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
    //console.log(formValues);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    // console.log(formErrors);
    if(Object.keys(formErrors.length === 0 && isSubmit)){
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexName = /^[a-zA-Z\s]{2,}$/;
    const regexNumber = /[0-9]/;

    if(!values.name){
        errors.name = 'Es obligatorio que coloque su/s nombre/s';
    }else if(!regexName.test(values.name)){
      errors.name = 'No se aceptan números ni caracteres especiales en este campo';
    }else if(values.name.length < 8){
      errors.name = 'Este cadena debe tener más de 8 carácteres';
    }
    if(!values.email){
      errors.email = 'Es obligatorio que coloque su correo electrónico';
    }else if(!regex.test(values.email)){
      errors.email = 'Este correo no es válido';
    }
    if(!values.tel){
      errors.tel = 'Es obligatorio que coloque su número de teléfono/celular para poder contactarte';
    }else if(!regexNumber.test(values.tel)){
      errors.tel = 'Solo se aceptan números';
    }
    if(!values.asent){
        errors.asent = 'Es obligatorio que ponga el asunto a tratar';
    }
    if(!values.msg){
        errors.msg = 'Es obligatorio que escriba el mensaje a tratar del viaje que quieras viajar específicamente';
    }
    return errors;
  };
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
              <a href='https://www.DreamScape-ecoturismo.com' style={{"--i":3}}><Link to='/ecoturismo'><MdNaturePeople class="icon"/>Ecoturismo</Link></a>
              <a href='https://www.DreamScape-contacto.com' style={{"--i":4}}><Link to='/contacto' class="active"><MdPhone class="icon"/>Contacto</Link></a>
            </nav>
        </header>
        <Carousel fade class="custom-carousel" indicators={false} controls={false}>
            <Carousel.Item>
                <img className="d-block w-100" src={C1} alt="First slide"/>
                <div class="overlay"></div>
                <Carousel.Caption>
                <h5>Contáctanos</h5>
                <p class="carousel-text">¿Listo para tu próxima aventura en México?<br/>
                !CONTÁCTANOS HOY MISMO Y DEJA QUE NUESTROS EXPERTOS EN TURISMO TE AYUDEN A PLANIFICAR EL VIAJE DE TUS SUEÑOS¡ Ya sea que busques relajarte
                en la playa, explorar sitios arqueológicos o sumergirte en la cultura local, estamos aquí para hacer que tu experiencia en México sea inolvidable.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div class="form-container">
            <h1>Llénanos el formulario para contactarte</h1>
            <form onSubmit={handleSubmit} class="contact-form">
                <input type='text' id ="name" name="name" placeholder='Nombre(s)' maxLength={50}
                value={formValues.name} onChange={handleChange}/>
                <p class='error'>{formErrors.name}</p>
                <input type='text' id ="email" name="email" placeholder='Correo electrónico'
                value={formValues.email} onChange={handleChange}/>
                <p class='error'>{formErrors.email}</p>
                <input type='tel' id ="tel" name="tel" placeholder='Número de teléfono/celular'
                value={formValues.tel} onChange={handleChange}/>
                <p class='error'>{formErrors.tel}</p>
                <input type='text' id ="asent" name="asent" placeholder='Asunto'
                value={formValues.asent} onChange={handleChange}/>
                <p class='error'>{formErrors.asent}</p>
                <textarea id="msg" name="msg" placeholder='Mensaje' rows='5'
                value={formValues.msg} onChange={handleChange}></textarea>
                <p class='error'>{formErrors.msg}</p>
                <button class='btn-send'>Enviar</button>
            </form>
        </div>
    </div>
  )
}

export default Contacto;