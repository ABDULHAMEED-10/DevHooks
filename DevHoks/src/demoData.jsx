import brand1 from "../src/assets/brand-1-1.png";
import brand2 from "../src/assets/brand-1-2.png";
import brand3 from "../src/assets/brand-1-3.png";
import brand4 from "../src/assets/brand-1-4.png";
import brand5 from "../src/assets/brand-1-5.png";
import test1 from "../src/assets/tes-1-1.jpg";
import test2 from "../src/assets/tes-1-2.jpg";
import test3 from "../src/assets/tes-1-3.jpg";
import test4 from "../src/assets/tes-1-4.jpg";
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

const reviewsData = [
  {
    id: 1,
    pic: test1,
    name: "Kenzie Edgar",
    review:
      "DevHoks exceeded our expectations with their web development services. Their attention to detail and commitment to deadlines were outstanding. Our platform is now faster, more user-friendly, and highly secure. Highly recommended!",
  },
  {
    id: 2,
    pic: test2,
    name: "Stevie Tifft",
    review:
      "Working with DevHoks was an absolute pleasure. They transformed our vision into a stunning e-commerce website with seamless functionality. The team was professional, responsive, and went above and beyond to deliver a perfect product.",
  },
  {
    id: 3,
    pic: test3,
    name: "Tommie Ewart",
    review:
      "We hired DevHoks for a mobile app project, and their team delivered an exceptional product. The app is sleek, fast, and exactly what we needed to engage our customers. Great communication throughout the process!",
  },

  {
    id: 4,
    pic: test4,
    name: "Kendall Mcguffie",
    review:
      "DevHoks is a team of highly skilled professionals who are committed to delivering quality work. They built a beautiful website for my business that is easy to navigate and has helped me attract more clients. I am extremely happy with the results!",
  },

  {
    id: 5,
    pic: test1,
    name: "Maurice Harnish",
    review:
      "I am thrilled with the website that DevHoks created for my business. It is visually stunning, easy to use, and has helped me increase my online sales. The team was a pleasure to work with and delivered the project on time and within budget.",
  },
  {
    id: 6,
    pic: test2,
    name: "Dorothy Harnish",
    review:
      "DevHoks is the best web development company I have ever worked with. They are professional, reliable, and incredibly talented. They built a beautiful website for my business that has helped me attract more customers and grow my brand. I highly recommend them!",
  },

  
];
export { servicestype, brandsData, servicesData,discountData,reviewsData };
