import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiBaremetrics } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import { useStateContext } from '../contexts/ContextProvider';
import { useAuth0 } from '@auth0/auth0-react';
import AtomicSpinner from 'atomic-spinner'

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const [active, setActive] = useState("")
  const { isAuthenticated, isLoading } = useAuth0();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <SiBaremetrics /> <span>MATRIX</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
              DASHBOARD
            </p>
            {isLoading ? <div className=' flex justify-center items-center'> <AtomicSpinner /></div> : isAuthenticated ?
              <div>
                <a href="#Inputs"
                  onClick={() => setActive('#Inputs')}
                  style={{ backgroundColor: active === "#Inputs" && currentColor }}
                  className={active === '#Inputs' ? activeLink : normalLink}
                >
                  Girdiler
                </a>
                <a href="#Rapor"
                  onClick={() => setActive('#Rapor')}
                  style={{ backgroundColor: active === "#Rapor" && currentColor }}
                  className={active === '#Rapor' ? activeLink : normalLink}
                >
                  Rapor
                </a>
              </div> :
              <div>
                <a href="#Home"
                  onClick={() => setActive('#Home')}
                  style={{ backgroundColor: active === "#Home" && currentColor }}
                  className={active === '#Home' ? activeLink : normalLink}
                >
                  Ana Sayfa
                </a>
              </div>
            }



          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
