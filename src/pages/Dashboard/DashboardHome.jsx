import { useContext } from 'react';
import DashboardContainer from '../../components/DashboardContainer';
import { AuthContext } from '../../providers/AuthProvider';

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
          <div className="w-[350px] md:w-[500px] lg:w-[600px] md:px-6">
            <div className="flex shadow-2xl px-4 py-10 rounded-xl flex-col items-center justify-between  gap-6 glass">
              <div>
                <img
                  src={user?.photoURL}
                  className="w-24 h-24 rounded-full shadow-2xl object-cover"
                />
              </div>
              <div className="">
                <h1 className="text-3xl font-bold">{user?.displayName}</h1>
                <p className="italic">{user?.email}</p>
                {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
          </div>
        </div>
      </DashboardContainer>
    </div>
  );
};
export default DashboardHome;
