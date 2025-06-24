const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
];

const words = [
  { text: "Innovator", imgPath: `${import.meta.env.BASE_URL}images/ideas.svg` },
  { text: "Engineer", imgPath: `${import.meta.env.BASE_URL}images/concepts.svg` },
  { text: "Speaker", imgPath: `${import.meta.env.BASE_URL}images/designs.svg` },
  { text: "Developer", imgPath: `${import.meta.env.BASE_URL}images/code.svg` },
  { text: "Innovator", imgPath: `${import.meta.env.BASE_URL}images/ideas.svg` },
  { text: "Engineer", imgPath: `${import.meta.env.BASE_URL}images/concepts.svg` },
  { text: "Speaker", imgPath: `${import.meta.env.BASE_URL}images/designs.svg` },
  { text: "Developer", imgPath: `${import.meta.env.BASE_URL}images/code.svg` },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Tech Experience" },
  { value: 8, suffix: "+", label: "Real-world Projects Delivered" },
  { value: 4, suffix: "+", label: "ndustry Certifications" },
  { value: 3, suffix: "", label: "Keynote Appearances" },
];

const logoIconsList = Array.from({ length: 11 }, (_, i) => ({
  imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-${i + 1}.png`,
}));

const abilities = [
  {
    imgPath: `${import.meta.env.BASE_URL}images/seo.png`,
    title: "Precision & Quality",
    desc: "Every project I take on is treated with engineering precision...",
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/chat.png`,
    title: "Clear, Consistent Communication",
    desc: "Whether we’re sprint planning or iterating on feedback...",
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/time.png`,
    title: "On-Time Delivery",
    desc: "Having led multiple time-sensitive projects...",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: `${import.meta.env.BASE_URL}images/logos/react.png`,
  },
  {
    name: "Python Developer",
    imgPath: `${import.meta.env.BASE_URL}images/logos/python.svg`,
  },
  {
    name: "Backend Developer",
    imgPath: `${import.meta.env.BASE_URL}images/logos/node.png`,
  },
  {
    name: "Interactive Developer",
    imgPath: `${import.meta.env.BASE_URL}images/logos/three.png`,
  },
  {
    name: "Project Manager",
    imgPath: `${import.meta.env.BASE_URL}images/logos/git.svg`,
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: `${import.meta.env.BASE_URL}models/react_logo-transformed.glb`,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: `${import.meta.env.BASE_URL}models/python-transformed.glb`,
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: `${import.meta.env.BASE_URL}models/node-transformed.glb`,
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: `${import.meta.env.BASE_URL}models/three.js-transformed.glb`,
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: `${import.meta.env.BASE_URL}models/git-svg-transformed.glb`,
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Satyam brought precision and structure...",
    imgPath: `${import.meta.env.BASE_URL}images/exp1.png`,
    logoPath: `${import.meta.env.BASE_URL}images/logo1.png`,
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
    imgPath: `${import.meta.env.BASE_URL}images/exp2.png`,
    logoPath: `${import.meta.env.BASE_URL}images/logo2.png`,
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
    imgPath: `${import.meta.env.BASE_URL}images/exp3.png`,
    logoPath: `${import.meta.env.BASE_URL}images/logo3.png`,
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
  {
    name: "logo1",
    imgPath: `${import.meta.env.BASE_URL}images/logo1.png`,
  },
  {
    name: "logo2",
    imgPath: `${import.meta.env.BASE_URL}images/logo2.png`,
  },
  {
    name: "logo3",
    imgPath: `${import.meta.env.BASE_URL}images/logo3.png`,
  },
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
  {
    name: "insta",
    imgPath: `${import.meta.env.BASE_URL}images/insta.png`,
  },
  {
    name: "fb",
    imgPath: `${import.meta.env.BASE_URL}images/fb.png`,
  },
  {
    name: "x",
    imgPath: `${import.meta.env.BASE_URL}images/x.png`,
  },
  {
    name: "linkedin",
    imgPath: `${import.meta.env.BASE_URL}images/linkedin.png`,
  },
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
