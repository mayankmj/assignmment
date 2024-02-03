import { useState,useEffect } from "react";
import Menu from "../Components/Menu";
import Navbar from "../Components/Navbar";
import AddFile from "../Components/AddFile";
import TableContainer from "../Components/TableContainer";

const Upload = ({ userDetails }) => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [filePresent, setFilePresent] = useState(false);

  const handleFilePresentChange = (isFilePresent) => {
    setFilePresent(isFilePresent);
  };

   useEffect(() => {
    const handleResize = () => {
      setMenuOpen(window.innerWidth > 540);
      setIsSmallScreen(window.innerWidth<=540)
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-[#FAFAFB]">
      <Navbar toggleMenu={handleNavToggle} user={userDetails}/>
      <div className="bg-[#FAFAFB] w-full bg-gray-100 flex justify-start py-0 pr-4 pl-4 box-border gap-4 tracking-normal flex-row smm:items-start smm:justify-start smm:pr-30">
        <div className={`smm:w-[218px] smm:flex smm:flex-col smm:items-start smm:justify-end smm:pt-0 smm:px-0 smm:pb-0 box-border ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
            {isMenuOpen && <Menu />}
          </div>
        </div>
        <section className="flex-1  flex flex-col items-start justify-start pt-[49px] px-0 pb-0 box-border text-left text-5xl text-black">
          <div className="self-stretch  flex flex-col justify-center items-center ">
              <AddFile onFilePresentChange={handleFilePresentChange}/>
          </div>
        </section>
      </div>
       {filePresent && <TableContainer />}
    </div>
  );
};

export default Upload;
