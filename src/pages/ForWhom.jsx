import Container from '../components/Container';
import bannerImg from '../assets/images/banner.jpg';
import { Link } from 'react-router-dom';
import {
  FaBusinessTime,
  FaCode,
  FaRProject,
  FaResearchgate,
} from 'react-icons/fa';
import { PiStudent } from 'react-icons/pi';
import { SiCoinmarketcap, SiFreelancer } from 'react-icons/si';
import { MdEvent } from 'react-icons/md';
import { GiHealthNormal } from 'react-icons/gi';

const ForWhom = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <Container>
          <div className="text-center text-neutral-content my-10">
            <div className="max-w-4xl">
              <h2 className="md:text-4xl text-2xl font-semibold mb-10 text-white text-center">
                Who <span className="dark:text-purple-600">Benefits</span> from
                Our <span className="dark:text-blue-600">Website</span>?
              </h2>
              <div className="persona-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {/* Card 1 - Travel Services */}
                <div className="relative flex flex-col mt-4 glass rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-500">
                      <i className="fas fa-globe-americas text-white">
                        <FaCode />
                      </i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      Software Engineer
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      Easily organize coding tasks, manage project timelines,
                      and collaborate with team members efficiently.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col mt-4 glass rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-500">
                      <i className="fas fa-globe-americas text-white">
                        <FaRProject />
                      </i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      Project Manager
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      Streamline project planning, allocate resources, and
                      monitor task progress in one centralized platform.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col mt-4 glass rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-500">
                      <i className="fas fa-globe-americas text-white">
                        <PiStudent />
                      </i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">Student</h6>
                    <p className="mb-4 text-blueGray-500">
                      Organize assignments, track project deadlines, and enhance
                      time management skills to excel in academic tasks.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col mt-4 glass rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-500">
                      <i className="fas fa-globe-americas text-white">
                        <SiFreelancer />
                      </i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      Freelance Professional
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      Manage multiple client projects, set deadlines, and track
                      deliverables to enhance productivity and meet client
                      expectations.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col mt-4 glass rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-500">
                      <i className="fas fa-globe-americas text-white">
                        <FaBusinessTime />
                      </i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      Entrepreneur/Business Owner
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      Plan and prioritize business tasks, set goals, and ensure
                      efficient execution to drive business growth.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col mt-4 glass rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-500">
                      <i className="fas fa-globe-americas text-white">
                        <SiCoinmarketcap />
                      </i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      Marketing Specialist
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      Coordinate marketing campaigns, track content creation
                      tasks, and ensure timely execution of marketing
                      strategies.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col mt-4 glass rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-500">
                      <i className="fas fa-globe-americas text-white">
                        <FaResearchgate />
                      </i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">Researcher</h6>
                    <p className="mb-4 text-blueGray-500">
                      Organize research tasks, manage literature reviews, and
                      keep track of project milestones for effective research
                      management.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col mt-4 glass rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-500">
                      <i className="fas fa-globe-americas text-white">
                        <MdEvent />
                      </i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      Event Planner
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      Plan and execute events seamlessly by managing tasks
                      related to logistics, vendor coordination, and event
                      timelines.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col mt-4 glass rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-500">
                      <i className="fas fa-globe-americas text-white">
                        <GiHealthNormal />
                      </i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      Healthcare Provider
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      Organize patient appointments, track medical research
                      tasks, and manage administrative responsibilities
                      efficiently.
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/dashboard/addTask">
                <button className="btn btn-primary btn-sm capitalize">
                  Let&apos;s Explore
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default ForWhom;
