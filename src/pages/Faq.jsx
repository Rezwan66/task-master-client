import Container from '../components/Container';
import bannerImg from '../assets/images/banner.jpg';

const Faq = () => {
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
              <h2 className="md:text-4xl text-2xl font-semibold mb-10 md:mb-20 text-white text-center">
                Frequently Asked{' '}
                <span className="dark:text-purple-600">Questions</span>
              </h2>
              <div className="flex items-center">
                <div className="flex flex-col lg:flex-row lg:gap-10 lg:w-4/5 sm:mx-auto sm:mb-2 lg:-mx-2">
                  <div className="w-full lg:w-1/2 px-4 py-2">
                    <details className="mb-4 min-w-[250px]">
                      <summary className="font-semibold  glass rounded-md py-2 px-4">
                        How to get started?
                      </summary>

                      <span>Sign up and start organizing.</span>
                    </details>
                    <details className="mb-4 min-w-[250px]">
                      <summary className="font-semibold glass rounded-md py-2 px-4">
                        Any cost involved?
                      </summary>

                      <span>Basic features are free.</span>
                    </details>
                    <details className="mb-4 min-w-[250px]">
                      <summary className="font-semibold  glass rounded-md py-2 px-4">
                        Can I invite collaborators?
                      </summary>

                      <span>Yes, invite and collaborate.</span>
                    </details>
                  </div>
                  <div className="w-full lg:w-1/2 px-4 py-2">
                    <details className="mb-4 min-w-[250px]">
                      <summary className="font-semibold  glass rounded-md py-2 px-4">
                        Mobile app available?
                      </summary>

                      <span className="px-4 py-2">Mobile app coming soon.</span>
                    </details>
                    <details className="mb-4 min-w-[250px]">
                      <summary className="font-semibold  glass rounded-md py-2 px-4">
                        Data security measures?
                      </summary>

                      <span className="px-4 py-2">
                        Data security coming soon.
                      </span>
                    </details>
                    <details className="mb-4 min-w-[250px]">
                      <summary className="font-semibold  glass rounded-md py-2 px-4">
                        Need customer support?
                      </summary>

                      <span className="px-4 py-2">
                        24/7 customer support available.
                      </span>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Faq;
