import React, { useState } from 'react';
import DropdownButton from './DropdownButton';
import { FiX } from 'react-icons/fi';

const TableContainer = () => {
  const [data, setData] = useState([
    { slNo: '01', link: 'https://www.google.com', prefix: 'prefixsample', tags: ['TAG', 'TAG'] },
    { slNo: '02', link: 'https://www.example.com', prefix: 'prefixexample', tags: ['TAG', 'TAG'] },
    { slNo: '03', link: 'https://www.sample.com', prefix: 'prefixsample', tags: ['TAG', 'TAG'] },
    { slNo: '04', link: 'https://www.sample.com', prefix: 'prefixsample', tags: ['TAG', 'TAG'] },
    { slNo: '05', link: 'https://www.sample.com', prefix: 'prefixsample', tags: ['TAG', 'TAG'] },
  ]);

  const headings = [
    { text: 'Sl No.' },
    { text: 'Links' },
    { text: 'Prefix' },
    { text: 'Add Tags' },
    { text: 'Selected Tags' },
  ];

  const options = [
    "option1",
    "option2",
    "option3",
    "option4",
    "option5",
    "option6",
  ];

  const handleOptionSelect = (selectedOption) => {
    console.log(`Selected option: ${selectedOption.label}`);
  };

  const handleRemoveTag = (rowIndex, tagIndex) => {
    const newData = [...data];
    newData[rowIndex].tags.splice(tagIndex, 1);
    setData(newData);
  };

  return (
    <div className='lg:pl-60 pt-10 overflow-auto bg-[#FAFAFB]'>
    <section className="rounded-lg mb-12" >
      <table className="table bg-[#F5F5F5]">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index} className="table-header pt-5 pb-5 pl-5 pr-5">
                {heading.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className="table-row">
              <td className="table-cell pr-10 pl-10 pb-4 pt-4">{item.slNo}</td>
              <td className="table-cell pr-10 pl-10 pb-4 pt-4">
                <a
                  className="text-dodgerblue"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.link}
                </a>
              </td>
              <td className="table-cell pr-10 pl-10 pb-4 pt-4">{item.prefix}</td>
              <td className="table-cell pr-10 pl-10 pb-4 pt-4">
                <DropdownButton options={options} onSelect={handleOptionSelect} />
              </td>
              <td className="table-cell pr-10 pl-10 pb-4 pt-4">
                <div className="flex flex-row flex-wrap items-start justify-start gap-[20px] text-center text-3xs text-light-gohan">
                  {item.tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className="relative">
                      <button className="bg-[#605BFF] cursor-pointer [border:none] py-1 pr-3 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                        <div className="relative pr-4 text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-figtree text-light-gohan text-center">
                          {tag}
                        </div>
                        <FiX
                          onClick={() => handleRemoveTag(rowIndex, tagIndex)}
                          className="h-4 w-4 absolute top-1 right-0 cursor-pointer or-1"
                          alt="Remove tag"
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
    </div>
  );
};

export default TableContainer;
