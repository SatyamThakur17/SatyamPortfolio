const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
];

const words = [
  { text: "Innovator", imgPath: "/SatyamPortfolio/images/ideas.svg" },
  { text: "Engineer", imgPath: "/SatyamPortfolio/images/concepts.svg" },
  { text: "Speaker", imgPath: "/SatyamPortfolio/images/designs.svg" },
  { text: "Developer", imgPath: "/SatyamPortfolio/images/code.svg" },
  { text: "Innovator", imgPath: "/SatyamPortfolio/images/ideas.svg" },
  { text: "Engineer", imgPath: "/SatyamPortfolio/images/concepts.svg" },
  { text: "Speaker", imgPath: "/SatyamPortfolio/images/designs.svg" },
  { text: "Developer", imgPath: "/SatyamPortfolio/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Tech Experience" },
  { value: 8, suffix: "+", label: "Real-world Projects Delivered" },
  { value: 4, suffix: "+", label: "ndustry Certifications" },
  { value: 3, suffix: "", label: "Keynote Appearances" },
];

const logoIconsList = Array.from({ length: 11 }, (_, i) => ({
  imgPath: `/SatyamPortfolio/images/logos/company-logo-${i + 1}.png`,
}));

const abilities = [
  {
    imgPath: "/SatyamPortfolio/images/seo.png",
    title: "Precision & Quality",
    desc: "Every project I take on is treated with engineering precision...",
  },
  {
    imgPath: "/SatyamPortfolio/images/chat.png",
    title: "Clear, Consistent Communication",
    desc: "Whether we’re sprint planning or iterating on feedback...",
  },
  {
    imgPath: "/SatyamPortfolio/images/time.png",
    title: "On-Time Delivery",
    desc: "Having led multiple time-sensitive projects...",
  },
];

const techStackImgs = [
  { name: "React Developer", imgPath: "/SatyamPortfolio/images/logos/react.png" },
  { name: "Python Developer", imgPath: "/SatyamPortfolio/images/logos/python.svg" },
  { name: "Backend Developer", imgPath: "/SatyamPortfolio/images/logos/node.png" },
  { name: "Interactive Developer", imgPath: "/SatyamPortfolio/images/logos/three.png" },
  { name: "Project Manager", imgPath: "/SatyamPortfolio/images/logos/git.svg" },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/SatyamPortfolio/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/SatyamPortfolio/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/SatyamPortfolio/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/SatyamPortfolio/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/SatyamPortfolio/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Satyam brought precision and structure...",
    imgPath: "/SatyamPortfolio/images/exp1.png",
    logoPath: "/SatyamPortfolio/images/logo1.png",
    title: "Software Test Engineer",
    date: "November 2024 - December 2024",
    responsibilities: [
      "Designed and executed automated and manual test cases...",
      "Conducted complete bug lifecycle management...",
      "Built modular test environments...",
    ],
  },
  {
    review: "Satyam's data-driven environmental tech initiatives...",
    imgPath: "/SatyamPortfolio/images/exp2.png",
    logoPath: "/SatyamPortfolio/images/logo2.png",
    title: "Data Analyst & Project Manager",
    date: "May 2022 - April 2024",
    responsibilities: [
      "Engineered Python-based analytics pipelines...",
      "Applied Agile methodologies...",
      "Used SEO tools and digital platforms...",
    ],
  },
  {
    review: "Satyam’s cross-functional skills in marketing tech...",
    imgPath: "/SatyamPortfolio/images/exp3.png",
    logoPath: "/SatyamPortfolio/images/logo3.png",
    title: "Event Marketing & Production Intern",
    date: "February 2023 - March 2023",
    responsibilities: [
      "Collaborated with tech and design teams...",
      "Boosted campaign conversion by 20%...",
      "Managed digital assets and process flows...",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/SatyamPortfolio/images/logo1.png" },
  { name: "logo2", imgPath: "/SatyamPortfolio/images/logo2.png" },
  { name: "logo3", imgPath: "/SatyamPortfolio/images/logo3.png" },
];

const testimonials = [
  {
    name: "Product Manager",
    mentions: "Wyreflow",
    review: "Satyam quickly grasped our complex testing pipeline...",
  },
  {
    name: "Program Director",
    mentions: "Restless Development",
    review: "Satyam’s tech-driven approach to climate advocacy...",
  },
  {
    name: "Event Head",
    mentions: "Under 25 Summit 2023",
    review: "Satyam brought a unique tech-first mindset...",
  },
  {
    name: "Technische TechExpo",
    mentions: "IIT Guwahati",
    review: "Satyam’s keynote at our TechExpo was both visionary...",
  },
  {
    name: "Program Manager",
    mentions: "Saahas",
    review: "Satyam transformed our awareness campaign...",
  },
  {
    name: "UL Innovation Panel Judge",
    mentions: "NSSQ Event",
    review: "At just 17, Satyam had a room full of professionals...",
  },
];

const socialImgs = [
  { name: "insta", imgPath: "/SatyamPortfolio/images/insta.png" },
  { name: "fb", imgPath: "/SatyamPortfolio/images/fb.png" },
  { name: "x", imgPath: "/SatyamPortfolio/images/x.png" },
  { name: "linkedin", imgPath: "/SatyamPortfolio/images/linkedin.png" },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
