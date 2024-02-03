import { useState, useEffect } from 'react';
import notification from "../Assessts/noti_black.svg";
import { FiUpload, FiMenu, FiX } from "react-icons/fi";
import logo from "../Assessts/logo_blue.svg";
import { auth } from '../Pages/firebase'

const Navbar = ({ toggleMenu,user }) => {
  const [isCrossIconVisible, setCrossIconVisible] = useState(false);
  const [menuItems, setMenuItems] = useState(true); 
  const [isDropdownVisible, setDropdownVisible] = useState(false);


  const handleToggleMenu = () => {
    toggleMenu();
    setCrossIconVisible(!isCrossIconVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 540) {
        setMenuItems(false);
      } else {
        setMenuItems(true);
        setCrossIconVisible(false)
      }
    };

    handleResize();


    window.addEventListener('resize', handleResize);

   
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 


   const logout = async () => {
    try {
      await auth.signOut(); 
      window.open("/", "_self"); 
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  const clickback = () => {};
   const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  return (
    <div>
      <div className="flex flex-row justify-between pt-4">
        <div className="flex flex-row gap-2 mx-3 ">
          {isCrossIconVisible ? (
            <FiX className="cursor-pointer text-2xl md:text-4xl mt-auto mb-auto mx-2 text-[#000000]" onClick={handleToggleMenu} />
          ) : (
            <FiMenu className="cursor-pointer text-2xl sm:hidden md:text-4xl mt-auto mb-auto mx-2 text-[#000000]" onClick={handleToggleMenu} />
          )}
          <img src={logo} alt="my-logo" className="max-w-16 max-h-16 mt-auto mb-auto" />
          <p className="font-semibold leading-8 text-12xl mt-auto mb-auto">Base</p>
          <div className="flex items-start justify-start ml-16 ">
            {menuItems ? (
              <p className={`hidden sm:block leading-8 text-13xl font-[Figtree] ${isCrossIconVisible ? 'hidden' : ''}`}>Upload csv</p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="min-h-[23] min-w-[18] text-black cursor-pointer"
            loading="eager"
            alt=""
            src={notification}
          />
          <img
            src={user.photoURL}
            className="rounded-full overflow-hidden h-10 w-10 mb-2 mr-2 cursor-pointer"
            alt=""
             onClick={toggleDropdown}
          />
          {isDropdownVisible && (
              <div className="absolute top-20 right-1 bg-white p-1 shadow-md rounded-md ">
                <p className="cursor-pointer hover:font-bold" onClick={logout}>
                  Logout
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
