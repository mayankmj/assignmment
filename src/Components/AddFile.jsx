import { useState,useRef ,useCallback,useEffect } from "react";
import { FiUpload, FiMenu } from "react-icons/fi"; 
import excelicon from "../Assessts/excel-icon.svg"
const AddFile = ({ onFilePresentChange }) => {

     const [selectedFile, setSelectedFile] = useState(null);
    const [filePresent, setFilePresent] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);

  const handleDrop = useCallback((event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFile(files[0]);
  }, []);

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleFileInputChange = useCallback((event) => {
    const file = event.target.files[0];
    handleFile(file);
  }, []);

  const handleLoader = useCallback(() => {
  setLoading(true);

  setTimeout(() => {
    setLoading(false);
    console.log("File uploaded:", selectedFile);
    setFilePresent(true);
    onFilePresentChange(true);
  }, 2000);
}, [selectedFile]);

  const handleFile = (file) => {
    setSelectedFile(file);
    setFilePresent(!file);
    onFilePresentChange(!true);
  };

  const handleBrowseClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, []);
  return (
    <div>
        <div
            className="flex flex-row items-start justify-start py-0 pr-[26px] pl-0 box-border lg:min-w-[620px] text-center text-base text-darkgray-200 font-figtree"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div
              className="flex-1 rounded-lg bg-light-gohan flex flex-col items-center justify-start p-4 box-border gap-[21px] max-w-full"
            >
              <div
                className="self-stretch rounded-lg box-border flex flex-col items-center justify-start pt-[98px] pb-[84px] pr-5 pl-[21px] gap-[16px] max-w-full z-[1] border-[1px] border-dashed border-light-beerus-hover"
              >
    {selectedFile ? (
              <div className="flex flex-col items-center justify-start w-full">
    <img
      className="w-12 h-12 relative"
      loading="eager"
      alt=""
      src={excelicon}
    />
    <div className="relative my-3">
      <span className="text-[#999CA0] leading-7 text-3xl">{selectedFile.name}</span>
      <label
        className="cursor-pointer ml-2"
        onClick={() => {setSelectedFile(null); setFilePresent(false);onFilePresentChange(false)}}
      >
      <br/>
        <span className="font-[Figtree] leading-8 text-3xl mt-4 text-red-500">Remove</span>
      </label>
    </div>
  </div>
) : (
              <>
                <img
                  className="w-12 h-12"
                  loading="eager"
                  alt=""
                  src={excelicon}
                />
                
                <div className="relative leading-[24px] text-3xl">
                  <span>{`Drop your excel sheet here or `}</span>
                  <label
                    className="text-mediumslateblue-200 cursor-pointer  text-[#605BFF] font-bold"
                    onClick={handleBrowseClick}
                  >
                    browse
                  </label>
                </div>
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={handleFileInputChange}
                  ref={inputRef}
                />
                </>
)}
              </div>
              <label
  htmlFor="fileInput"
  className={`cursor-pointer bg-[#605BFF] py-4 px-5 gap-2 self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-center  ${filePresent ? "bg-[#BFBDFF] cursor-default" : ""}`}
  onClick={() => !filePresent && handleLoader()}
>
  {loading ? (
     <div style={loaderStyles}></div>
  ) : (
    <>
      <FiUpload className="min-h-5 min-w-5 text-white" />
      <p className="mt-auto mb-auto leading-6 font-semibold text-white text-3xl">
        Upload
      </p>
    </>
  )}
</label>

            </div>
          </div>
    </div>
  )
}

export default AddFile

const loaderStyles = {
  borderRadius: "50%",
  border: "4px solid #fff",
  borderTop: "4px solid #3498db",
  width: "20px",
  height: "20px",
  animation: "spin 1s linear infinite",
}
