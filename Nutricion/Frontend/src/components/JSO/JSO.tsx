import { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import replicate from "replicate";
import LlamaStackClient from 'llama-stack-client';

const JSO: React.FC = () => {
  const [selectedProteins, setselectedProteins] = useState<number[]>([]);
  const navigate = useNavigate();
const [data, setData] = useState<string>("");
//ollama run llama3
const main = async () => {
try {
  

  console.log("cargando ... ")


//http://localhost:8080/api/ollama/generar
    try {
      const response = await fetch('http://localhost:11434/api/generate"', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
     model: "llama3",
     prompt: "¿Qué es el agua?",
     stream: false
   })
      });
console.log(response)
      if (response.ok) {
        console.log('Datos enviados correctamente');
        alert('Datos enviados correctamente');

        
      } else {
        if (response.status== 401)
            alert('Contraseña incorrecta');
      }

    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Error al enviar la solicitud');
    }
// fetch("http://localhost:11434/api/generate", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     model: "llama3",
//     prompt: "¿Qué es el agua?",
//     stream: false
//   })
// })
//   .then(res => res.json())
//   .then(data => console.log(data.response)).catch(error => console.log(error));
} catch (error) {
  console.log("ERROR",error)
}


};

 main();


// async function main() {try{
//   console.log("HOLA")
//      let medicForm = localStorage.getItem("medicForm")
//     let gym = localStorage.getItem("gymForm")
//     let objetives = localStorage.getItem("objetives")
//     let frutas = localStorage.getItem("frutas")
//     let proteins = localStorage.getItem("proteins")
//     let carbs = localStorage.getItem("carbs")


//   const json = JSON.stringify({ "Condicion_medica":medicForm, "condicion_fisica":gym, "objetivos":objetives, "frutas":frutas, "proteinas":proteins, "carbohidratos":carbs });
//   console.log(json);

// //     const stream = await client.inference.chatCompletion({
// //   messages: [{ role: 'user', content: 'Hola, ¿cómo estás?' }],
// //   model_id: 'meta-llama/Llama-3.2-3B-Instruct',
// //   stream: true
// // });

// // for await (const chunk of stream) {
// //     console.log(chunk.event.delta || '');
// // }


// let cliente = replicate("r8_ZNcdODPCKwN933U6oCmhh9IWT2wAoI10KTS5F")
// let respuesta = cliente.models.get("meta/meta-llama-3-70b-instruct").predict("Escribe un poema sobre IA")
// console.log(respuesta)

//   // let message : string = JSON.stringify(completion.choices[0].message.content);
//   // setData(message);
 
// }catch(error){
//   console.log(error)
// }
// }

// main();

  useEffect(() => { 
    // Este código se ejecuta una sola vez al montar la vista
    console.log("Vista JSO montada");
   let medicForm = localStorage.getItem("medicForm")
    let gym = localStorage.getItem("gymForm")
    let objetives = localStorage.getItem("objetives")
    let frutas = localStorage.getItem("frutas")
    let proteins = localStorage.getItem("proteins")
    let carbs = localStorage.getItem("carbs")

  const json = JSON.stringify({ "Condicion_medica":medicForm, "condicion_fisica":gym, "objetivos":objetives, "frutas":frutas, "proteinas":proteins, "carbohidratos":carbs });
  console.log(json);
  setData(json);

  }, []);

  const handleSelect = (id: number) => {
    setselectedProteins((prev) =>
      prev.includes(id) ? prev.filter((condition) => condition !== id) : [...prev, id]
    );
    console.log(selectedProteins)
  };

  const handleDataSend = () => {
    let medicForm = localStorage.getItem("medicForm")
    let gym = localStorage.getItem("gymForm")
    let objetives = localStorage.getItem("objetives")
    let frutas = localStorage.getItem("frutas")

    console.log("Proteinas seleccionadas:", selectedProteins,medicForm,gym,objetives,frutas);
    localStorage.setItem("proteins", JSON.stringify(selectedProteins));

    navigate("/Carbs");
  };

  return (
    <div className="mx-auto mt-[100px] flex flex-col justify-center items-center w-1/2 max-w-[30rem] min-w-[15rem]">
      <h1 className="text-black text-lg font-bold mb-5 text-center">Muestra JSON</h1>

      <div className="grid grid-cols-3 grid-rows-2 gap-6">
            <p>Muestra JSON</p>
            {data}

      </div>

      <button onClick={handleDataSend} className="mt-6 w-1/3 p-2 bg-black text-white rounded-[6px] hover:rounded-[10px] mx-auto block">
        Continuar
      </button>
    </div>
  );
};




export default JSO;
