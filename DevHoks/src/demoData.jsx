import brand1 from "../src/assets/brand-1-1.png";
import brand2 from "../src/assets/brand-1-2.png";
import brand3 from "../src/assets/brand-1-3.png";
import brand4 from "../src/assets/brand-1-4.png";
import brand5 from "../src/assets/brand-1-5.png";
import test1 from "../src/assets/tes-1-1.jpg";
import test2 from "../src/assets/tes-1-2.jpg";
import test3 from "../src/assets/tes-1-3.jpg";
import test4 from "../src/assets/tes-1-4.jpg";
import test5 from "../src/assets/tes-1-5.png";

const servicestype = [
  {
    id: 1,
    to: "/service/webDevelopment",
    title: "Web Development",
  },
  {
    id: 2,
    to: "/service/mobileDevelopment",
    title: "App Development",
  },
  {
    id: 3,
    to: "/service/uiux",
    title: "UI/UX Designing",
  },
  {
    id: 4,
    to: "/service/seo",
    title: "SEO",
  },
  {
    id: 5,
    to: "/service/Ecommerce",
    title: "E-commerce",
  },
  {
    id: 6,
    to: "/service/dataScience",
    title: "Data Science",
  },
];
const brandsData = [
  {
    id: 1,
    imageSrc: brand1,
    altText: "Jupiter",
  },
  {
    id: 2,
    imageSrc: brand2,
    altText: "dyte",
  },
  {
    id: 3,
    imageSrc: brand3,
    altText: "fampay",
  },

  {
    id: 4,
    imageSrc: brand4,
    altText: "swigg",
  },
  {
    id: 5,
    imageSrc: brand5,
    altText: "Mighty",
  },
];
const servicesData = [
  {
    id: 1,
    icon: "fas fa-code",
    title: "Web Development",
    description:
      "We provide a wide range of web development services to help you grow your business online.",
    link: "/service/web-development",
  },
  {
    id: 2,
    icon: "fas fa-mobile-alt",
    title: "App Development",
    description:
      "We provide a wide range of app development services to help you grow your business online.",
    lnk: "/service/app-development",
  },
  {
    id: 3,
    icon: "fas fa-paint-brush",
    title: "UI/UX Designing",
    description:
      "We provide a wide range of UI/UX designing services to help you grow your business online.",
    link: "/service/ui-ux-designing",
  },
];

const discountData = [
  {
    id: 1,
    icon: "fa-solid fa-circle-check",
    title: "Army Veterans - 20% Off",
    description:
      "Rixon Honor You, 20% Discount for Army Veterans. You Served Us, Now Let Us Serve You.",
    lnk: "",
  },
  {
    id: 2,
    icon: "fa-solid fa-hand-holding-hand",
    title: "Individuals over 60",
    description:
      "Special 20% Discount for Individuals Over 60. Let Us Help You, Every Step of the Way.",
    lnk: "",
  },
  {
    id: 3,
    icon: "fas fa-rocket",
    title: "Under 20 Enterpreneurs",
    description:
      "Special 15% Discount for Entrepreneurs Under 20. Your Ideas Deserve Our Respect and Support.",
    lnk: "",
  },
];

const reviewsData = [
  {
    id: 1,
    pic: test1,
    name: "Kenzie Edgar",
    designation: "CEO, Tech Solutions Inc.",
    review:
      "Rixon exceeded our expectations with their web development services. Their attention to detail and commitment to deadlines were outstanding. Our platform is now faster, more user-friendly, and highly secure. Highly recommended!",
  },
  {
    id: 2,
    pic: test2,
    name: "Stevie Tifft",
    designation: "Founder, Tifft Technologies",
    review:
      "Working with Rixon was an absolute pleasure. They transformed our vision into a stunning e-commerce website with seamless functionality. The team was professional, responsive, and went above and beyond to deliver a perfect product.",
  },

  {
    id: 3,
    pic: test4,
    name: "Kendall Mcguffie",
    designation: "CEO, Mcguffie Media Group",
    review:
      "Rixon is a team of highly skilled professionals who are committed to delivering quality work. They built a beautiful website for my business that is easy to navigate and has helped me attract more clients. I am extremely happy with the results!",
  },

  {
    id: 4,
    pic: test3,
    name: "Maurice Harnish",
    designation: "Founder, Harnish Enterprises",
    review:
      "I am thrilled with the website that Rixon created for my business. It is visually stunning, easy to use, and has helped me increase my online sales. The team was a pleasure to work with and delivered the project on time and within budget.",
  },
  {
    id: 5,
    pic: test5,
    name: "Alyssa Mccarthy",
    designation: "CEO, Mccarthy Marketing",
    review:
      "Rixon exceeded our expectations with their web development services. Their attention to detail and commitment to deadlines were outstanding. Our platform is now faster, more user-friendly, and highly secure. Highly recommended!",
  },
];

const statsData = [
  {
    id: 1,
    icon: "fa-solid fa-crown",
    title: "We Own Every Corner of the Market from 2024",
    description:
      "From AI and Mobile App Development to Marketing and Design.Our comprehensive team of experts tackles it all.",
  },
  {
    id: 2,
    icon: "fa-solid fa-comments",
    title: "Our Multilingual Agents Deliver a Proven Win-Win",
    description:
      "Communication made easy! Our 8+ language agents understand your needs and ensure a smooth conversation experience.",
  },
  {
    id: 3,
    icon: "fa-solid fa-phone",
    title: "Free Consultation, Real Results for Free",
    description:
      "Get a free 45-minute consultation for your business idea.No $250 charge - we're your allies, offering this service for free.",
  },
  {
    id: 4,
    icon: "fa-solid fa-video",
    title: "Two meetings a week,every update on Time",
    description:
      "We prioritize our clients by two weekly meetings to showcase our progress, gather feedback, and ensure it with their vision.",
  },
];

const titleParaInfo = [
  {
    id: 1,
    title: "Top Featured Services",
    heading: "Experience Top Services of Our Agency",
    description:
      "These are the Special services of Rixon,Guaranteed Satisfaction and Professionalism.",
  },
  {
    id: 2,
    title: "Thats How We Work",
    heading: "Experience Rixon's Flows",
    description:
      "Think of our algorithm like butter on bread—smooth and effortless. It's that simple! Each step flows seamlessly, making meetings a breeze.",
  },
  {
    id: 3,
    title: "SPECIAL DISCOUNTS",
    heading: "Special Offers for Special People by Rixon",
    description: "Get the Best Offers and Discounts on our Services.",
  },
  {
    id: 4,
    title: "Why People Choose Us",
    heading: "Why Choose Rixon Over Others",
    description:
      "With over 1 million agencies out there, here's what sets us apart and keeps clients winning.",
  },
  {
    id: 5,
    title: "Our Happy Clients",
    heading: "What Our Clients Say About Us",
    description:
      "Our clients are our biggest supporters. Take a look for yourself in the testimonials.",
  },
  {
    id: 6,
    title: "FAQs",
    heading: "Frequently Asked Questions",
    description: "",
  },
];
const FAQdata = [
  {
    id: 1,
    icon: "fa-solid fa-lightbulb",
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services, including web development, app development, UI/UX designing, SEO, e-commerce, and data science. Our team of experts is dedicated to helping you grow your business online.",
  },
  {
    id: 2,
    icon: "fa-solid fa-book",
    question: "How do I get started with Rixon?",
    answer:
      "Getting started with Rixon is easy! Simply fill out our contact form, and one of our agents will reach out to you to discuss your needs and recommend the best solutions for your business.",
  },
  {
    id: 3,
    icon: "fa-solid fa-pen-to-square",
    question: "What makes Rixon different from other agencies?",
    answer:
      "Rixon is different from other agencies because we prioritize our clients' needs and deliver high-quality work on time and within budget. Our team of experts is committed to helping you achieve your business goals and grow your online presence.",
  },
  {
    id: 4,
    icon: "fa-solid fa-handshake",
    question: "Do you offer free consultations?",
    answer:
      "Yes! We offer free 45-minute consultations for your business idea. Our team of experts will provide you with valuable insights and recommendations to help you get started on the right foot.",
  },
];

export {
  servicestype,
  brandsData,
  servicesData,
  discountData,
  reviewsData,
  statsData,
  titleParaInfo,
  FAQdata,
};
