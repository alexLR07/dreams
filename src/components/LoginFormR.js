import './css/LoginForm.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

/***** Función de validación del formulario de acceso con Autorización  *****/
function LoginFormR() {
  const initialValues = {name: "", ap: "", am: "", email: "", password: "", passConf: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState (true);

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
    console.log(formErrors);
    if(Object.keys(formErrors.length === 0 && isSubmit)){
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit, passwordMatch]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexName = /^[a-zA-Z\s]{2,}$/;

    if(!values.name){
      errors.name = 'Es obligatorio que coloque su/s nombre/s';
    }else if(!regexName.test(values.name)){
      errors.name = 'No se aceptan números ni caracteres especiales en este campo';
    }else if(values.name.length < 8){
      errors.name = 'Este cadena debe tener más de 8 carácteres';
    }
    if(!values.ap){
      errors.ap = 'Es obligatorio que coloque su apelllido paterno';
    }else if(!regexName.test(values.ap)){
      errors.ap = 'No se aceptan números ni caracteres especiales en este campo';
    }
    if(!values.am){
      errors.am = 'Es obligatorio que coloque su apellido materno';
    }else if(!regexName.test(values.am)){
      errors.am = 'No se aceptan números ni caracteres especiales en este campo';
    }
    if(!values.email){
      errors.email = 'Es obligatorio que coloque su correo electrónico';
    }else if(!regex.test(values.email)){
      errors.email = 'Este correo no es válido';
    }
    if(!values.password){
      errors.password = 'Es obligatorio que coloque su contraseña';
    }else if(values.password.length < 5){
      errors.password = 'La contraseña debe tener más de 5 carácteres';
    }
    if(!values.passConf){
      errors.passConf = 'Es obligatorio que coloque nuevamente su contraseña para confirmar';
    }else if(values.password.length < 5){
      errors.password = 'La contraseña debe tener más de 5 carácteres';
    }else if(values.password === values.passConf){
      setPasswordMatch(true);
    }else{
      errors.passConf = 'Las contraseñas no coinciden';
    }
    return errors;
  };

  return (
    <div class="Form">
      <div class="wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h1>Registro</h1>
          <div class="input-box">
            <input class="inputs" type="text" id="name" name="name" placeholder="Nombre(s)"
            value={formValues.name} onChange={handleChange}/>
          </div>
          <p class='error'>{formErrors.name}</p>
          <div class="input-box">
            <input class="inputs" type="text" id="ap" name="ap" placeholder="Apellido Paterno"
            value={formValues.ap} onChange={handleChange}/>
          </div>
          <p class='error'>{formErrors.ap}</p>
          <div class="input-box">
            <input class="inputs" type="text" id="am" name="am" placeholder="Apellido Materno"
            value={formValues.am} onChange={handleChange}/>
          </div>
          <p class='error'>{formErrors.am}</p>
          <div class="input-box">
            <input class="inputs" type="email" id="email" name="email" placeholder="Correo electrónico"
            value={formValues.email} onChange={handleChange}/>
          </div>
          <p class='error'>{formErrors.email}</p>
          <div class="input-box">
            <input class="inputs" type="password" id="password" name="password" placeholder="Contraseña"
            value={formValues.password} onChange={handleChange}/>
          </div>
          <p class='error'>{formErrors.password}</p>
          <div class="input-box">
            <input class="inputs" type="password" id="passConf" name="passConf" placeholder="Escriba nuevamente la contraseña"
            value={formValues.passConf} onChange={handleChange}/>
          </div>
          <p class='error'>{formErrors.passConf}</p>
          <button type="submit" class="btn">Registrarme</button>
          <div class="register-link">
            <p>¿Ya tienes cuenta?
              <a href="https://www.DreamScape-registro.com" id="access_link"><Link to='/Login-form-access'>Inicia aquí</Link></a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginFormR;