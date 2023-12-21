import { useContext } from 'react';
import DashboardContainer from '../../components/DashboardContainer';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <DashboardContainer>
        <div className="">
          {/* <h2 className="md:text-4xl text-2xl font-bold uppercase mb-10 text-primary text-center">
            {' '}
            My Profile{' '}
          </h2> */}
          <div className="w-[280px] md:w-[500px] lg:w-[600px] md:px-6 h-full">
            <div className="flex shadow-2xl px-4 py-10 rounded-xl flex-col items-center justify-between  gap-6 glass">
              <div>
                <img
                  src={user?.photoURL}
                  className="w-32 h-32 rounded-full shadow-2xl object-cover"
                />
              </div>
              <div className="">
                <h1 className="text-3xl font-bold">{user?.displayName}</h1>
                <p className="italic my-4">{user?.email}</p>
                <Link to="/dashboard/todo">
                  <button className="btn btn-primary btn-block">
                    My Tasks
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DashboardContainer>
    </div>
  );
};
export default DashboardHome;
