import React from 'react';
import wonkaLogo from '../../assets/photo_logo.png';

// Definimos una interfaz por si el componente necesitara props en el futuro
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
     <header className="w-full h-[50px] p-2 bg-[#000000] flex justify-center items-center shadow-md border-3 border-black">
      <div className="flex flex-row items-center">
        <img
          src={wonkaLogo}
          alt="WonkaLogo"
          className="w-[45px] ml-3"
        />
        <h1 className="text-white text-lg font-bold ml-4">NUTRIGYM</h1>
      </div>
    </header>
  );
};

export default Header;
