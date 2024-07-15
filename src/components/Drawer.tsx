import { useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useStore } from '../store/useStore';

const Drawer = () => {
  const drawerWidth = 320;
  const drawerRef = useRef<HTMLInputElement>(null);

  const { isDark, updateIsDark } = useStore();

  useEffect(() => {
    localStorage.setItem('isdark', JSON.stringify(isDark));
  }, [isDark]);

  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  const bind = useDrag(({ down, movement: [mx], swipe: [swipeX] }) => {
    if (!down) {
      if (swipeX === -1 || mx < -drawerWidth / 3) {
        if (drawerRef.current) {
          drawerRef.current.checked = false;
        }
        api.start({ x: down ? mx : 0, immediate: down });
      } 
      else {
        api.start({  x: down ? mx : 0, immediate: down});
      }
    }
     else {
      const newX = mx < -drawerWidth ? -drawerWidth : mx > 0 ? 0 : mx;
      api.start({ x: newX, immediate: down });
    }
  });


  return (
    <div className="drawer w-auto z-50">
      <input
        ref={drawerRef}
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="drawer-button">
          <GiHamburgerMenu />
        </label>
      </div>

      <animated.div
        className="drawer-side "
        {...bind()}
        style={{ x }}
      >
         {/* <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label> */}
        <animated.ul data-theme={`${isDark ? 'dim': 'cupcake'}`}  className="menu bg-base-200 text-base-content min-h-full w-80 p-0">
          {/* Sidebar content here */}
          <li data-theme={`${isDark ? 'dim': 'aqua'}`} className='  flex flex-row justify-between items-start p-2 ' >
            <div className=' flex flex-col gap-0 ' >
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className=' font-semibold ' >Shiv Sharma</div>
              <div className=' font-semibold text-xs ' >+91 700******</div>
            </div>
            <div className=' flex  justify-end items-start ' >
              <label className="swap swap-rotate  ">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox" 
                  className="theme-controller"
                  value="synthwave"
                  checked={isDark}
                  onChange={() => updateIsDark(!isDark)} 
                />
              
                {/* sun icon */}
                <svg
                  className="swap-off h-8 w-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
              
                {/* moon icon */}
                <svg
                  className="swap-on h-8 w-8  fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </li>
          {/* <li><a>Sidebar Item 2</a></li> */}
        </animated.ul>
      </animated.div>
    </div>
  );
};

export default Drawer;
