import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoLogin from '../../assets/logoLogin.png'; // Asegúrate de que la ruta sea correcta

const UserRegistrationForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [date, setDate] = useState<string>('');
  const [dataSend, setDataSend] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    if (name === "name") setName(value);
    if (name === "userEmail") setUserEmail(value);
    if (name === "password") setPassword(value);
    if (name === "gender") setGender(value);
    if (name === "age") setAge(Number(value));
    if (name === "birthdate") setDate(value);
  };

  const handleDataSend = () => {
    setDataSend(true);

    if (age > 0) {
      console.log('Información enviada:', { name, userEmail, password, gender, age });
      navigate('/next-page');
    } else {
      console.log('Error en los datos');
    }
  };

  const handleSendToAPI = async () => {
    const userData = {
      email: userEmail,
      password: password,
      name: name,
      gender: gender,
      age: age,
      date: date
    };
    alert(JSON.stringify(userData));
    console.log(JSON.stringify(userData));


    try {
      const response = await fetch('http://localhost:3000/api/usuarios/newUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        console.log('Datos enviados correctamente');
        alert('Datos enviados correctamente');

         navigate('/');
      } else {
        console.log('Error al enviar los datos');
          alert('Error al enviar los datos');
      }

    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Error al enviar la solicitud');
    }
  };

  return (
    <div className="mx-auto mt-[100px] flex flex-col justify-center items-center w-1/3 max-w-[20rem] min-w-[10rem] flex-1">
      <img src={logoLogin} alt="Logo" className="w-[40px] mb-3" />
      <h1 className="text-black text-lg font-bold mb-3">Ingrese su información</h1>

      <form className="w-full bg-[#D9D9D9] p-5 rounded-[15px] shadow-md flex flex-col items-center gap-4 border-1 border-green-800 mb-10">
        <label className="w-full text-black text-sm text-center">Nombre</label>
        <input type="text" name="name" placeholder="Ingrese su nombre" className="w-5/6 p-2 border border-[#03530f] rounded-[6px]" onChange={handleInputChange} />

        <label className="w-full text-black text-sm text-center">Correo</label>
        <input type="text" name="userEmail" placeholder="Ingrese su correo" className="w-5/6 p-2 border border-[#03530f] rounded-[6px]" onChange={handleInputChange} />

        <label className="w-full text-black text-sm text-center">Contraseña</label>
        <input type="password" name="password" placeholder="Ingrese su contraseña" className="w-5/6 p-1 border border-[#03530f] rounded-[6px]" onChange={handleInputChange} />

        <label className="w-full text-black text-sm text-center">Género</label>
        <select name="gender" className="w-5/6 p-2 border border-[#03530f] rounded-[6px]" onChange={handleInputChange}>
          <option value="">Seleccione su género</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>

        <label className="w-full text-black text-sm text-center">Fecha de Nacimiento</label>
<input type="date" name="birthdate" className="w-5/6 p-2 border border-[#03530f] rounded-[6px]" onChange={handleInputChange} />

      </form>

      {/* <button onClick={handleDataSend} className="mt-20 w-2/5 p-2 bg-black text-white rounded-[4px] hover:rounded-[10px]">Continuar</button> */}
      <button onClick={handleSendToAPI} className="mt-4 w-2/5 p-2 bg-black text-white rounded-[4px] hover:rounded-[10px]">Continuar</button>
    </div>
  );
};

export default UserRegistrationForm;
