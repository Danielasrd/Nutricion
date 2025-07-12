import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cambur from "../../assets/cambur.jpg";
import manzana from "../../assets/manzana.png";
import papaya from "../../assets/papaya.jpg";
import naranja from "../../assets/naranja.jpg";
import aguacate from "../../assets/aguacate.jpg";
import piña from "../../assets/piña.jpg";

interface Condition {
  id: string;
  name: string;
  imageUrl: string;
}

const conditions: Condition[] = [
  { id: "Cambur", name: "Cambur", imageUrl: cambur },
  { id: "Manzana", name: "Manzana", imageUrl: manzana },
  { id: "papaya", name: "papaya", imageUrl: papaya },
  { id: "Naranja", name: "Naranja", imageUrl: naranja },
  { id: "Aguacate", name: "Aguacate", imageUrl: aguacate },
  { id: "Piña", name: "Piña", imageUrl: piña }, 
];

const FruitSelectionForm: React.FC = () => {
  const [selectedFruits, setselectedFruits] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSelect = (id: string) => {
    setselectedFruits((prev) =>
      prev.includes(id) ? prev.filter((condition) => condition !== id) : [...prev, id]
    );
    console.log(selectedFruits)
  };

  const handleDataSend = () => {
    let SelectMedicalConditions = localStorage.getItem("SelectMedicalConditions")
    let FitnessProfileForm = localStorage.getItem("FitnessProfileForm")
    let GoalSelectionPage = localStorage.getItem("GoalSelectionPage")
    console.log("Frutas seleccionadas:", selectedFruits,SelectMedicalConditions,FitnessProfileForm,GoalSelectionPage);
    localStorage.setItem("frutas", JSON.stringify(selectedFruits));

    navigate("/ProteinSelectionForm");
  };

  return (
    <div className="mx-auto mt-[100px] flex flex-col justify-center items-center w-1/2 max-w-[30rem] min-w-[15rem]">
      <h1 className="text-black text-lg font-bold mb-5 text-center">Seleccione su condición médica</h1>

      <div className="grid grid-cols-3 grid-rows-2 gap-6">
        {conditions.map((condition) => (
          <label key={condition.id} className="relative cursor-pointer w-full max-w-xs">
            <input
              type="checkbox"
              className="peer sr-only absolute inset-0 w-full h-full cursor-pointer"
              checked={selectedFruits.includes(condition.id)}
              onChange={() => handleSelect(condition.id)}
            />
            <span className={`absolute top-2 right-2 z-10 opacity-0 transition-all peer-checked:opacity-100`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500 stroke-white" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </span>
            <div className={`overflow-hidden rounded-lg bg-white shadow-md ring ring-transparent transition-all peer-checked:ring-blue-500`}>
              <img src={condition.imageUrl} alt={condition.name} className="w-full h-auto object-cover rounded-lg" />
              <header className="px-4 py-3 text-center">
                <p className="text-lg font-bold tracking-wide text-gray-700">{condition.name}</p>
              </header>
            </div>
          </label>
        ))}
      </div>

      <button onClick={handleDataSend} className="mt-6 w-1/3 p-2 bg-black text-white rounded-[6px] hover:rounded-[10px] mx-auto block">
        Continuar
      </button>
    </div>
  );
};

export default FruitSelectionForm;
