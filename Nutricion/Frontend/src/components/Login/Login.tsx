import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoLogin from '../../assets/logoLogin.png'; // Asegúrate de que la ruta sea correcta

const Login: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [dataSend, setDataSend] = useState<boolean>(false);
  const navigate = useNavigate();

  const inputHandlers: Record<string, React.Dispatch<React.SetStateAction<string>>> = {
    mail: setUserName,
    password: setPassword,
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const handler = inputHandlers[name];

    if (handler) {
      handler(value);
    }
  };

  const handleDataSend = () => {
    setDataSend(true);

  return;
    if (userName.includes('@') && password.length >= 6) {
      console.log('Login exitoso');
      navigate('/GymForm'); // Redirige a la siguiente pantalla
    } else {
      console.log('Error en los datos');
    }
  };
 const handleSendToAPI = async () => {
    const userData = {
      correo: userName,
      contraseña: password,
    };
   // alert(JSON.stringify(userData));
    console.log(JSON.stringify(userData));


    try {
      const response = await fetch('http://localhost:3000/api/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        console.log('Datos enviados correctamente');
        alert('Datos enviados correctamente');

           navigate('/FitnessProfileForm');
      } else {
        if (response.status== 401)
            alert('Contraseña incorrecta');
      }

    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Error al enviar la solicitud');
    }
  };
    const register = () => {
    setDataSend(true);


      navigate('/user-info'); // Redirige a la siguiente pantalla
    
  };


  const errorMail = (userName === '' || !userName.includes('@')) && dataSend;
  const errorPass = (password === '' || password.length < 6) && dataSend;

  return (
    <div className="mx-auto mt-[100px] flex flex-col justify-center items-center w-1/3 max-w-[20rem] min-w-[10rem] flex-1">
      {/* Imagen encima del título */}
      <img src={logoLogin} alt="Logo" className="w-[40px] mb-3" />
      
      {/* Título fuera del formulario */}
      <h1 className="text-black text-lg font-bold mb-3">Ingrese sus datos</h1>

      {/* Formulario más compacto */}
      <form className="w-full bg-[#D9D9D9] p-5 rounded-[15px] shadow-md flex flex-col items-center gap-4 border-1 border-green-800 mb-10">
        {/* Campo de Correo */}
        <label className="w-full text-black text-sm text-center">Correo</label>
        <input
          type="text"
          name="mail"
          placeholder="Ingrese su correo"
          className="w-5/6 p-2 border border-[#03530f] rounded-[6px] text-sm text-black"
          onChange={handleInputChange}
        />
        {errorMail && <p className="text-red-500 text-xs">El correo electrónico es inválido.</p>}

        {/* Campo de Contraseña */}
        <label className="w-full text-black text-sm text-center">Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="Ingrese su contraseña"
          className="w-5/6 p-1 border border-[#03530f] rounded-[6px] text-sm text-black"
          onChange={handleInputChange}
        />
        {errorPass && <p className="text-red-500 text-xs">La contraseña debe tener al menos 6 caracteres.</p>}
      </form>

      {/* Botón de Continuar fuera del formulario */}
      <button
                            onClick={handleSendToAPI}
        className="mt-20 text-center w-2/5 p-2 bg-black text-white border border-[#ffffff] 
        rounded-[4px] cursor-pointer transition-all ease-in duration-500 text-sm min-w-[6rem] 
        hover:rounded-[10px] hover:border-black"
      >
        Continuar
      </button>

              <button 
           onClick={register}
          className="bg-white text-[#5c5a72] border border-[#e3d7ff] 
          px-5 py-2.5 rounded-[10px] cursor-pointer ml-10 transition-all ease-in 
          duration-500 hover:rounded-[25px] hover:border-black"
        >
          Registrar
        </button>

    </div>
  );
};

export default Login;
