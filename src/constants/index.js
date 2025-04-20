const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs ", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 8, suffix: "+", label: "Tech Stack Skills" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Execution Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/companylogo-1.png",
  },
  {
    imgPath: "/images/logos/companylogo-2.png",
  },
  {
    imgPath: "/images/logos/companylogo-3.png",
  },
  {
    imgPath: "/images/logos/companylogo-4.png",
  },
  {
    imgPath: "/images/logos/companylogo-5.png",
  },
  {
    imgPath: "/images/logos/companylogo-6.png",
  },
  {
    imgPath: "/images/logos/companylogo-7.png",
  },
  {
    imgPath: "/images/logos/companylogo-8.png",
  },
  {
    imgPath: "/images/logos/companylogo-9.png",
  },
  {
    imgPath: "/images/logos/companylogo-10.png",
  },
  {
    imgPath: "/images/logos/companylogo-11.png",
  },
  {
    imgPath: "/images/logos/companylogo-13.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Precision & Craft",
    desc: "Pixel-perfect results, thoughtfully built. Every project is crafted with intention — from clean code to smooth user experiences.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Problem-Solving Mindset",
    desc: "From debugging tricky issues to optimizing features, I love digging into challenges and finding smart solutions.",
  },
  {
    imgPath: "/images/time.png",
    title: "Collaborative Process",
    desc: "Whether working solo or on a team, I believe great work comes from listening, adapting, and building together.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  // {
  //   name: "Full Stack Developer",
  //   imgPath: "/images/logos/git.svg",
  // },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
];


const expCards = [
  {
    cardtitle: "Google Data Analytics Certification",
    carddescription : "Gain hands-on experience with the daily practices of a junior data analyst while building key analytical skills in data cleaning, analysis, and visualization. Learn to work with tools like spreadsheets, SQL, R, and Tableau to organize data, perform calculations, and create clear visual presentations through dashboards and reports.",
    imgPath: "/images/google1.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer",
    date: "January 2025 - Present",
    responsibilities: [
      "Optimized ETL workflows for large-scale data processing by resolving critical script errors and integrating data from multiple sources, including unconventional formats like SOAP API, ensuring seamless extraction, transformation, and loading while maintaining data integrity.",
      "Implemented SQL upserts to reduce redundant updates, enhance query performance, and ensure real-time data accuracy in live-feed applications.",
      "Built interactive Power BI dashboards with advanced measures and calculations, integrating data from multiple sources to support data-driven decisions, uncover insights, and streamline collaboration across teams via Power BI Online."
    ],
  },
  {
    cardtitle: "Baruch College",
    carddescription : "Bachelors of Business Administration in Computer Information Systems with a concerntration in Data Analytics.",
    imgPath: "/images/Zicklin_Logo.svg.png",
    logoPath: "/images/logo2.png",
    title: "Associate",
    date: "May 2023 - December 2023",
    responsibilities: [
      "Analyzed customer purchasing trends using Excel and Google Analytics to identify high-demand products and seasonal buying patterns.",
      "Provided actionable insights for inventory restocking and strategic product placement, contributing to improved sales and more efficient floor layouts."
    ],
  },
  // {
  //   review: "",
  //   imgPath: "/images/exp3.png",
  //   logoPath: "/images/logo3.png",
  //   title: "",
  //   date: "",
  //   responsibilities: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

// const testimonials = [
//   {
//     name: "Esther Howard",
//     mentions: "@estherhoward",
//     review:
//       "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
//     imgPath: "/images/client1.png",
//   },
//   {
//     name: "Wade Warren",
//     mentions: "@wadewarren",
//     review:
//       "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
//     imgPath: "/images/client3.png",
//   },
//   {
//     name: "Guy Hawkins",
//     mentions: "@guyhawkins",
//     review:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     imgPath: "/images/client2.png",
//   },
//   {
//     name: "Marvin McKinney",
//     mentions: "@marvinmckinney",
//     review:
//       "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
//     imgPath: "/images/client5.png",
//   },
//   {
//     name: "Floyd Miles",
//     mentions: "@floydmiles",
//     review:
//       "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
//     imgPath: "/images/client4.png",
//   },
//   {
//     name: "Albert Flores",
//     mentions: "@albertflores",
//     review:
//       "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
//     imgPath: "/images/client6.png",
//   },
// ];

const socialImgs = [
  {
    name: "Github",
    imgPath: "/images/github.png",
    link: "https://github.com/ella-mahalia",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/ella-mahalia-simeon/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  // testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
