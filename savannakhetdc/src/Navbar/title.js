import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Title = () => {
    const { openSidebar, openModal } = useGlobalContext();
  return (
    <>
<header className="z-10 py-4 bg-white shadow-md bg-purple-600">
          <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600"> 
          <li className="flex text-purple-100">
              <button onClick={openSidebar} className="sidebar-toggle  text-purple-100 ">              
                    <FaBars />
                </button> 
              </li>                                           
            <div className="flex justify-center flex-1 lg:mr-32">
              <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                <div className="absolute inset-y-0 flex items-center pl-2">
                  <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path ></path>
                  </svg>
                </div>
                <input className="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md  focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Search for projects" aria-label="Search" />
              </div>
            </div>
            <ul className="flex items-center flex-shrink-0 space-x-6">

              <li className="flex text-purple-100">
                <button onClick={openModal} className="rounded-md focus:outline-none focus:shadow-outline-purple" aria-label="Toggle color mode">              
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                </button>
              </li>
              
              <li className="relative text-purple-100">
                <button className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple" aria-label="Notifications" aria-haspopup="true">
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                  </svg>
                  <span aria-hidden="true" className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"></span>
                </button>
              </li>
            </ul>
          </div>
        </header>
    </>
  );
};

export default Title;
