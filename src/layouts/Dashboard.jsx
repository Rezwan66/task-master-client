import { Link, NavLink, Outlet } from 'react-router-dom';
import {
  FaCalendarAlt,
  FaHouseUser,
  FaList,
  FaPlusCircle,
  FaUserAstronaut,
} from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content min-h-screen flex flex-col items-center justify-center bg-violet-100">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost btn-active btn-circle absolute left-4 top-2 drawer-button lg:hidden"
          >
            <FaList className="text-lg"></FaList>
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu uppercase p-4 w-80 text-lg min-h-full bg-violet-200 dark:bg-zinc-900 dark:text-white">
            {/* logo+website name */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <Link to="/dashboard/profile">
                <button className="btn btn-ghost font-black md:text-xl tracking-widest">
                  Task Master
                </button>
              </Link>
            </div>
            {/* Sidebar content here */}
            <li>
              <NavLink to="/dashboard/profile">
                <FaUserAstronaut />
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addTask">
                <FaPlusCircle />
                Add A Task
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/todo">
                <FaCalendarAlt />
                My tasks
              </NavLink>
            </li>
            {/* go to home/mainLayout-shared links */}
            <div className="divider my-6"></div>

            <li>
              <NavLink to="/">
                <FaHouseUser />
                HomePage
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
