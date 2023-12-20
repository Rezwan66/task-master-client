import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const MainLayout = () => {
  return (
    // <div
    //   className="hero min-h-screen"
    //   style={{
    //     backgroundImage: 'url(src/assets/bg/taskBG.svg)',
    //   }}
    // ></div>
    <div className="bg-violet-200 dark:bg-zinc-900 dark:text-white">
      <NavBar></NavBar>
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default MainLayout;
