import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
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
              <img
                src={`${import.meta.env.BASE_URL}images/project1.png`}
                alt="Dyslexicans"
              />
            </div>
            <div className="text-content">
              <h2>
                Dyslexicans: Early detection of SLDs using Machine learning
              </h2>
              <p className="text-white-50 md:text-xl">
                ML-oriented screening tool that identifies learning disabilities like dyslexia
                and dysgraphia through cognitive and behavioral data analysis.
                With a user-friendly interface and personalized insights, it enables early
                detection, tailored interventions, and fosters inclusive education.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src={`${import.meta.env.BASE_URL}images/project2.png`}
                  alt="Library Management Platform"
                />
              </div>
              <h2>Detection of Quasars using ML</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img
                  src={`${import.meta.env.BASE_URL}images/project3.png`}
                  alt="YC Directory App"
                />
              </div>
              <h2>Hostel Management System: A DBMS Project</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;