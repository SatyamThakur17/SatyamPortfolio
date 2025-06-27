const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
];

const words = [
  { text: "Innovator", imgPath: new URL('./images/ideas.svg', import.meta.url).href },
  { text: "Engineer", imgPath: new URL('./images/concepts.svg', import.meta.url).href },
  { text: "Speaker", imgPath: new URL('./images/designs.svg', import.meta.url).href },
  { text: "Developer", imgPath: new URL('./images/code.svg', import.meta.url).href },
  { text: "Innovator", imgPath: new URL('./images/ideas.svg', import.meta.url).href },
  { text: "Engineer", imgPath: new URL('./images/concepts.svg', import.meta.url).href },
  { text: "Speaker", imgPath: new URL('./images/designs.svg', import.meta.url).href },
  { text: "Developer", imgPath: new URL('./images/code.svg', import.meta.url).href },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Tech Experience" },
  { value: 8, suffix: "+", label: "Real-world Projects Delivered" },
  { value: 4, suffix: "+", label: "ndustry Certifications" },
  { value: 3, suffix: "", label: "Keynote Appearances" },
];

const logoIconsList = Array.from({ length: 11 }, (_, i) => ({
  imgPath: new URL(`./images/logos/company-logo-${i + 1}.png`, import.meta.url).href,
}));

const abilities = [
  {
    imgPath: new URL('./images/seo.png', import.meta.url).href,
    title: "Precision & Quality",
    desc: "Every project I take on is treated with engineering precision...",
  },
  {
    imgPath: new URL('./images/chat.png', import.meta.url).href,
    title: "Clear, Consistent Communication",
    desc: "Whether we’re sprint planning or iterating on feedback...",
  },
  {
    imgPath: new URL('./images/time.png', import.meta.url).href,
    title: "On-Time Delivery",
    desc: "Having led multiple time-sensitive projects...",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: new URL('./images/logos/react.png', import.meta.url).href,
  },
  {
    name: "Python Developer",
    imgPath: new URL('./images/logos/python.svg', import.meta.url).href,
  },
  {
    name: "Backend Developer",
    imgPath: new URL('./images/logos/node.png', import.meta.url).href,
  },
  {
    name: "Interactive Developer",
    imgPath: new URL('./images/logos/three.png', import.meta.url).href,
  },
  {
    name: "Project Manager",
    imgPath: new URL('./images/logos/git.svg', import.meta.url).href,
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: new URL('./models/react_logo-transformed.glb', import.meta.url).href,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: new URL('./models/python-transformed.glb', import.meta.url).href,
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: new URL('./models/node-transformed.glb', import.meta.url).href,
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: new URL('./models/three.js-transformed.glb', import.meta.url).href,
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: new URL('./models/git-svg-transformed.glb', import.meta.url).href,
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Satyam brought precision and structure...",
    imgPath: new URL('./images/exp1.png', import.meta.url).href,
    logoPath: new URL('./images/logo1.png', import.meta.url).href,
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
    imgPath: new URL('./images/exp2.png', import.meta.url).href,
    logoPath: new URL('./images/logo2.png', import.meta.url).href,
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
    imgPath: new URL('./images/exp3.png', import.meta.url).href,
    logoPath: new URL('./images/logo3.png', import.meta.url).href,
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
    imgPath: new URL('./images/logo1.png', import.meta.url).href,
  },
  {
    name: "logo2",
    imgPath: new URL('./images/logo2.png', import.meta.url).href,
  },
  {
    name: "logo3",
    imgPath: new URL('./images/logo3.png', import.meta.url).href,
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
    imgPath: new URL('./images/insta.png', import.meta.url).href,
  },
  {
    name: "fb",
    imgPath: new URL('./images/fb.png', import.meta.url).href,
  },
  {
    name: "x",
    imgPath: new URL('./images/x.png', import.meta.url).href,
  },
  {
    name: "linkedin",
    imgPath: new URL('./images/linkedin.png', import.meta.url).href,
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
