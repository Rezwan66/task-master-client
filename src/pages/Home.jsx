import bannerImg from '../assets/images/banner.jpg';

const Home = () => {
  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="flex flex-col items-center justify-center">
            <h2 className="md:text-7xl text-4xl text-center max-w-2xl font-semibold">
              Empower Your{' '}
              <span className="text-yellow-600 dark:text-purple-600">
                Productivity
              </span>
              . Master Your{' '}
              <span className="text-yellow-600 dark:text-blue-600">Tasks</span>.
            </h2>
            <p className="my-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* <p className="max-w-2xl mt-20">
        Task Master is a powerful task management platform that streamlines your
        daily workflow. With Task Master, you can effortlessly add tasks and
        keep them organized in one central location. The user-friendly interface
        allows you to create tasks, set due dates, add descriptions, and even
        assign priorities. Once your tasks are added, you can conveniently view
        them at a glance, ensuring that nothing slips through the cracks. The
        intuitive task list provides a clear overview of your to-dos, making it
        easy to stay on top of your responsibilities. Whether you&apos;re
        managing personal tasks, professional projects, or team assignments,
        Task Master simplifies the process of task creation and viewing, helping
        you boost your productivity and reach your goals.
      </p> */}
    </div>
  );
};
export default Home;
