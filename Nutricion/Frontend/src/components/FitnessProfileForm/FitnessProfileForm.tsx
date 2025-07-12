import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoLogin from '../../assets/logoLogin.png'; // Asegúrate de que la ruta sea correcta

const FitnessProfileForm: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [activityLevel, setActivityLevel] = useState<string>('');
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
console.log(name,value)
    if (name === "activityLevel") setActivityLevel(value);
    if (name === "weight") setWeight(Number(value));
    if (name === "height") setHeight(Number(value));

  };


  const handleSendToAPI = async () => {
    const userData = {
      peso: weight,
      altura: height,
      nivelActividad: activityLevel,

    };
    alert(JSON.stringify(userData));
    console.log(JSON.stringify(userData));
    localStorage.setItem("FitnessProfileForm", JSON.stringify(userData));



    try {
      // const response = await fetch('http://localhost:3000/api/usuarios/newUser', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(userData)
      // });
        // navigate('/MedicForm');
        let response = {ok:true}
      if (response.ok) {
        console.log('Datos enviados correctamente');
        alert('Datos enviados correctamente');
         navigate('/SelectMedicalConditions');

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
      <h1 className="text-black text-lg font-bold mb-3">Ingrese su condicion fisica</h1>

      <form className="w-full bg-[#D9D9D9] p-5 rounded-[15px] shadow-md flex flex-col items-center gap-4 border-1 border-green-800 mb-10">
        <label className="w-full text-black text-sm text-center">Peso</label>
        <input type="number" name="peso" placeholder="Ingrese su peso" className="w-5/6 p-2 border border-[#03530f] rounded-[6px]" onChange={handleInputChange} />

        <label className="w-full text-black text-sm text-center">Altura</label>
        <input type="number" name="altura" placeholder="Ingrese su altura" className="w-5/6 p-2 border border-[#03530f] rounded-[6px]" onChange={handleInputChange} />

        <label className="w-full text-black text-sm text-center">Nivel de actividad</label>
        
        <select name="nivelActividad" className="w-5/6 p-2 border border-[#03530f] rounded-[6px]" onChange={handleInputChange}>
          <option value="">Selecciona tu nivel de actividad</option>
          <option value="Sedentario">Sedentario(poco o ningún ejercicio  )</option>
          <option value="Ligeramente activo">Ligeramente activo(ejercicio ligero/deporte 1-3 dias/semana)</option>
          <option value="Moderadamente activo">Moderadamente activo(ejercicio moderado/deporte 3-5 dias/semana ) </option>
          <option value="Muy activo">Muy activo (ejercicio intenso/deporte 6-7 dias/semana)</option>
          <option value="Extra activo">Extra activo(ejercicio muy intenso/trabajo físico diario) </option>


        </select>

      </form>
      {/* <button onClick={handleDataSend} className="mt-20 w-2/5 p-2 bg-black text-white rounded-[4px] hover:rounded-[10px]">Continuar</button> */}
      <button onClick={handleSendToAPI} className="mt-4 w-2/5 p-2 bg-black text-white rounded-[4px] hover:rounded-[10px]">Continuar</button>
    </div>
  );
};

export default FitnessProfileForm;
