import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);
  const powerBIRef = useRef(null); // NEW

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [
      rydeRef.current,
      libraryRef.current,
      ycDirectoryRef.current,
      powerBIRef.current // NEW
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Predict Heart Attack Risk with a Smart, Data-Driven Classification Model
              </h2>
              <p className="text-white-50 md:text-xl">
                Built using Python, scikit-learn, and advanced data preprocessing techniques,
                this model analyzes key health metrics to predict the likelihood of a heart
                attack—helping support early intervention and better outcomes.
              </p>
              <a
                href="https://ellamahalia.pythonanywhere.com/heart_attack"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-200 transition-colors duration-300"
              >
                View Project on GitHub
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFC9FA]">
                <img
                  src="/images/project4.png"
                  alt="Sereni: A Mental Health Chatbot"
                />
              </div>
              <h2>Sereni: A Mental Health Chatbot</h2>
              <a
                href="https://v0-mental-health-chatbot-oimrad.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-200 transition-colors duration-300"
              >
                View Project on GitHub
              </a>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#1e3a8a]">
                <img src="/images/House.png" alt="YC Directory App" />
              </div>
              <h2>House Price Prediction Model</h2>
              <a
                href="https://ellamahalia.pythonanywhere.com/heart_attack"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-200 transition-colors duration-300"
              >
                View Project on GitHub
              </a>
            </div>

            {/* New Power BI Section */}
            <div className="project" ref={powerBIRef}>
              <div className="text-content">
                <h2>Power BI Dashboard Portfolio</h2>
                <p className="text-white-50 md:text-xl">
                  Dive into interactive dashboards showcasing insights on AI trends, global trade,
                  and workforce analytics—all built in Power BI.
                </p>
                <a
                  href="https://www.dropbox.com/scl/fo/glvfg1d172kx3kdxo25q5/AJPeqtN6tJnI8hLvLXqTKV0?rlkey=r97wqtwn0hv7fkuoxbb9tgj1k&st=yvxhvwub&dl=0" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-yellow-500 text-black px-5 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-300"
                >
                  View Power BI Dashboards
                </a>
              </div>
            </div>
            {/* End Power BI Section */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
