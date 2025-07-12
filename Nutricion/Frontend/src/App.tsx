import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import UserRegistrationForm from './components/UserRegistrationForm/UserRegistrationForm';
import FitnessProfileForm from './components/FitnessProfileForm/FitnessProfileForm';
import SelectMedicalConditions from './components/SelectMedicalConditions/SelectMedicalConditions';
import GoalSelectionPage from './components/GoalSelectionPage/GoalSelectionPage';
import FruitSelectionForm from './components/FruitSelectionForm/FruitSelectionForm';
import ProteinSelectionForm from './components/ProteinSelectionForm/ProteinSelectionForm';
import CarbSelectionForm from './components/CarbSelectionForm/CarbSelectionForm';
import JSO from './components/JSO/JSO';
const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col items-center bg-gradient-to-br from-emerald-500 via-lime-300 to-green-500">
        <Header /> {/* El Header se muestra en todas las pantallas */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/UserRegistrationForm" element={<UserRegistrationForm />} />
          <Route path="/FitnessProfileForm" element={<FitnessProfileForm />} />
          <Route path="/SelectMedicalConditions" element={<SelectMedicalConditions />} />
          <Route path="/GoalSelectionPage" element={<GoalSelectionPage />} />
          <Route path="/FruitSelectionForm" element={<FruitSelectionForm />} />
          <Route path="/ProteinSelectionForm" element={<ProteinSelectionForm />} />
          <Route path="/CarbSelectionForm" element={<CarbSelectionForm />} />
          <Route path="/JSO" element={<JSO />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;