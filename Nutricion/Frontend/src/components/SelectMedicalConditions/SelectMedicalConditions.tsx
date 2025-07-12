import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoLogin from "../../assets/logoLogin.png";
import CeliacDisease from "../../assets/celiaca.jpg";
import highCholesterol from "../../assets/colesterol.jpg";
import diabetes from "../../assets/diabetes.jpg";
import Hypertension from "../../assets/hipertension.png";

interface Condition {
  id: string;
  name: string;
  imageUrl: string;
}

const conditions: Condition[] = [
  { id: "Hipertensión", name: "Hipertensión", imageUrl: Hypertension },
  { id: "Diabetes", name: "Diabetes", imageUrl: diabetes },
  { id: "Hipercolesterolemia", name: "Hipercolesterolemia", imageUrl: highCholesterol },
  { id: "Enfermedad celíaca", name: "Enfermedad celíaca", imageUrl: CeliacDisease },
];

const SelectMedicalConditions: React.FC = () => {
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSelect = (id: string) => {
   
    setSelectedConditions((prev) =>
      prev.includes(id) ? prev.filter((condition) => condition !== id) : [...prev, id]
    );
     console.log(selectedConditions)
  };

  const handleDataSend = () => {
  let FitnessProfileForm = localStorage.getItem("FitnessProfileForm")
    console.log("Condiciones seleccionadas:", selectedConditions, FitnessProfileForm);
 localStorage.setItem("SelectMedicalConditions", JSON.stringify(selectedConditions));

    navigate("/GoalSelectionPage");
  };

  return (
    <div className="mx-auto mt-[100px] flex flex-col justify-center items-center w-1/3 max-w-[20rem] min-w-[10rem] flex-1">
      <img src={logoLogin} alt="Logo" className="w-[40px] mb-3" />
      <h1 className="text-black text-lg font-bold mb-3">Seleccione su condición médica</h1>

      <div className="grid grid-rows-2 gap-4">
        {conditions.map((condition) => (
          <label key={condition.id} className="relative cursor-pointer">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={selectedConditions.includes(condition.id)}
              onChange={() => handleSelect(condition.id)}
            />
            <span className={`absolute top-2 right-2 z-10 opacity-0 transition-all ${selectedConditions.includes(condition.id) ? "opacity-100" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500 stroke-white" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </span>
            <div className={`overflow-hidden rounded-lg bg-white shadow-md ring ring-transparent grayscale transition-all active:scale-95 ${selectedConditions.includes(condition.id) ? "ring-blue-500 grayscale-0" : ""}`}>
              <div>
                <img src={condition.imageUrl} alt={condition.name} className="h-28 w-48 object-cover" />
              </div>
              <header className="px-2.5 py-2.5">
                <p className="text-lg font-bold tracking-wide text-gray-700">{condition.name}</p>
              </header>
            </div>
          </label>
        ))}
      </div>

      <button onClick={handleDataSend} className="mt-4 w-2/5 p-2 bg-black text-white rounded-[4px] hover:rounded-[10px]">
        Continuar
      </button>
    </div>
  );
};

export default SelectMedicalConditions;
