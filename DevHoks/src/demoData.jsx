import brand1 from "../src/assets/brand-1-1.png";
import brand2 from "../src/assets/brand-1-2.png";
import brand3 from "../src/assets/brand-1-3.png";
import brand4 from "../src/assets/brand-1-4.png";
import brand5 from "../src/assets/brand-1-5.png";
const servicestype = [
  {
    id: 1,
    to: "/service/web-development",
    title: "Web Development",
  },
  {
    id: 2,
    to: "/service/app-development",
    title: "App Development",
  },
  {
    id: 3,
    to: "/service/ui-ux-designing",
    title: "UI/UX Designing",
  },
  {
    id: 4,
    to: "/service/seo",
    title: "SEO",
  },
  {
    id: 5,
    to: "/service/digital-marketing",
    title: "Digital Marketing",
  },
  {
    id: 6,
    to: "/service/branding",
    title: "Branding",
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
      "DevHoks Honor You, 20% Discount for Army Veterans. You Served Us, Now Let Us Serve You.",

  },
  {
    id: 2,
    icon: "fa-solid fa-hand-holding-hand",
    title: "Individuals over 60",
    description:
      "Special 20% Discount for Individuals Over 60. Let Us Help You, Every Step of the Way.",
   
  },
  {
    id: 3,
    icon: "fas fa-rocket",
    title: "Under 20 Enterpreneurs",
    description:
      "Special 15% Discount for Entrepreneurs Under 20. Your Ideas Deserve Our Respect and Support.",
  },
];
export { servicestype, brandsData, servicesData,discountData };
