import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import Container from './Container';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';

const NavBar = () => {
  const [mode, setMode] = useState('light');
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChangeTheme = () => {
    const html = document.documentElement;
    if (mode === 'light') {
      html.classList.remove('light');
      html.classList.add('dark');
      setMode('dark');
      localStorage.setItem('mode', 'dark');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
      setMode('light');
      localStorage.setItem('mode', 'light');
    }
  };

  useEffect(() => {
    const currentMode = localStorage.getItem('mode') || 'light';
    document.documentElement.classList.add(currentMode);
    setMode(currentMode);
  }, []);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast('Logged Out Successfully!', {
          icon: '👋',
          style: {
            borderRadius: '8px',
            background: '#333',
            color: '#fff',
          },
        });
        navigate('/', { replace: true });
      })
      .catch(err => {
        console.log(err.message);
        toast(err.message, {
          icon: '❌',
          style: {
            borderRadius: '8px',
            background: '#333',
            color: '#fff',
          },
        });
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-orange-400 font-bold underline' : ''
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-orange-400 font-bold underline' : ''
          }
          to="/addTask"
        >
          Add Task
        </NavLink>
      </li> */}
      {/* <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-orange-400 font-bold underline' : ''
          }
          to="/todo"
        >
          ToDo
        </NavLink>
      </li> */}
      {/* <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-orange-400 font-bold underline' : ''
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li> */}
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-orange-400 font-bold underline' : ''
          }
          to="/addTask"
        >
          Who is it for
        </NavLink>
      </li>
      <li>
        {user ? (
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-orange-400 font-bold underline' : ''
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-orange-400 font-bold underline' : ''
            }
            to="/dashboard"
          >
            Let&apos;s Explore
          </NavLink>
        )}
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-orange-400 font-bold underline' : ''
          }
          to="/addTask"
        >
          FAQ
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-ghost">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="gap-6 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:text-black"
              >
                {navLinks}
              </ul>
            </div>
            <Link to="/">
              <button className="btn btn-ghost font-black md:text-xl tracking-widest">
                Task Master
              </button>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="gap-10 menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end items-center">
            <button onClick={handleChangeTheme} className="mr-6 text-4xl">
              {mode === 'light' ? (
                <BsToggleOff></BsToggleOff>
              ) : (
                <BsToggleOn></BsToggleOn>
              )}
            </button>
            {user && user?.photoURL ? (
              <div className="flex items-center gap-2">
                <div className="avatar md:block hidden">
                  <div className="w-7 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <p className="md:block hidden text-sm text-[#D99904] font-semibold">
                  {user?.displayName.split(' ')[0]}
                </p>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm btn-secondary"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm btn-primary">Login</button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default NavBar;
