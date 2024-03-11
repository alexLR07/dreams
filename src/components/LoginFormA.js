import './css/LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

/***** Función de validación del formulario de acceso con Autorización  *****/
function LoginFormA() {
  const initialValues = {email: "", password: ""};
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
    console.log(formErrors);
    if(Object.keys(formErrors.length === 0 && isSubmit)){
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

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
    return errors;
  };
  return (
    /***** Autorización  *****/
    <div className="Form">
      <div class="wrapper">
        <form action="" onSubmit={handleSubmit}>
            <h1>Acceso</h1>
            <div class="input-box">
                <input type="email" id="email" placeholder="Correo electrónico" name="email"
                value={formValues.email} onChange={handleChange}/>
                <FaUser class="icon"/>
            </div>
            <p class='error'>{formErrors.email}</p>
            <div class="input-box">
                <input type="password" id="password" placeholder="Contraseña" name="password"
                value={formValues.password} onChange={handleChange}/>
                <FaLock class="icon"/>
            </div>
            <p class='error'>{formErrors.password}</p>
            <div class="remember-forgot">
                <label><input type="checkbox" id="remember" name="remember"/>Recordarme</label>
                <a href='.'>Olvidé la contraseña</a>
            </div>
            <button type="submit" class="btn">Acceder</button>
            <div class="register-link">
                <p>¿No tienes cuenta?
                  <a href='.' id="register_link"></a><Link to='/Login-form-register'>Regístrate aquí</Link>
                </p>
            </div>
            {/***** Autenticación con Google*****/}
            <div class="section">
              <p>---------- O puedes iniciar tu cuenta en ----------</p>
              <span>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  const decoded = jwtDecode(credentialResponse?.credential);
                  console.log(decoded);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
              </span>
            </div>
        </form>
      </div>
    </div>
  )
}

export default LoginFormA;